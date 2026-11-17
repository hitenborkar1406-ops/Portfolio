import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, PerspectiveCamera } from '@react-three/drei';
import { INTRO_CONFIG } from '../config/introConfig';
import { evaluateTimeline } from '../config/motionTimeline';
import { FuturisticSedan } from './FuturisticSedan';
import { GoldenTrails } from './GoldenTrails';

interface IntroStageSceneProps {
  progressRef: React.MutableRefObject<number>;
}

function createUnderbodyShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(128, 64, 14, 128, 64, 122);
    grad.addColorStop(0, 'rgba(10, 3, 14, 0.92)');
    grad.addColorStop(0.55, 'rgba(18, 6, 22, 0.55)');
    grad.addColorStop(1, 'rgba(27, 10, 32, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 128);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export const IntroStageScene: React.FC<IntroStageSceneProps> = React.memo(({ progressRef }) => {
  const { size, camera } = useThree();

  const rootRef = useRef<THREE.Group | null>(null);
  const bodyTiltRef = useRef<THREE.Group | null>(null);
  const wheelRefs = useRef<(THREE.Group | null)[]>([]);
  const headlightSpotRef = useRef<THREE.PointLight | null>(null);
  const shadowDecalRef = useRef<THREE.Mesh | null>(null);

  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientRef = useRef<THREE.AmbientLight | null>(null);

  const exitXRef = useRef<number>(7.2);
  const lookTargetVec = useMemo(() => new THREE.Vector3(), []);
  const shadowTexture = useMemo(() => createUnderbodyShadowTexture(), []);

  const headlightMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: INTRO_CONFIG.colors.headlightCore,
        emissive: INTRO_CONFIG.colors.gold,
        emissiveIntensity: 0,
        roughness: 0.15,
        toneMapped: false,
      }),
    []
  );

  const beamMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#ffe49e',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    []
  );

  const roadMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uCarPos: { value: new THREE.Vector2(-2.85, -0.58) },
        uHeadlightPower: { value: 0 },
        uReveal: { value: 0 },
        uGold: { value: new THREE.Color(INTRO_CONFIG.colors.gold) },
        uLilac: { value: new THREE.Color(INTRO_CONFIG.colors.lilac) },
        uBase: { value: new THREE.Color('#130517') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorldPos = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: `
        uniform vec2 uCarPos;
        uniform float uHeadlightPower;
        uniform float uReveal;
        uniform vec3 uGold;
        uniform vec3 uLilac;
        uniform vec3 uBase;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        void main() {
          float edgeX = smoothstep(0.0, 0.16, vUv.x) * (1.0 - smoothstep(0.84, 1.0, vUv.x));
          float edgeZ = smoothstep(0.0, 0.22, vUv.y) * (1.0 - smoothstep(0.78, 1.0, vUv.y));
          float edgeMask = edgeX * edgeZ;

          float lineFront = smoothstep(0.012, 0.0, abs(vUv.y - 0.34));
          float lineBack = smoothstep(0.012, 0.0, abs(vUv.y - 0.66));
          float lanes = (lineFront + lineBack) * 0.22 * uReveal;

          vec2 aheadCenter = uCarPos + vec2(1.9, 0.0);
          float headPool = exp(-dot(vWorldPos.xz - aheadCenter, vWorldPos.xz - aheadCenter) * 0.38) * uHeadlightPower;
          float carHalo = exp(-dot(vWorldPos.xz - uCarPos, vWorldPos.xz - uCarPos) * 0.28) * uReveal;

          vec3 col = uBase;
          col += uLilac * (0.14 * uReveal + carHalo * 0.18);
          col += uGold * (lanes + headPool * 0.34 + carHalo * 0.08);

          float alpha = edgeMask * (0.78 * uReveal + headPool * 0.4 + lanes);
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.92));
        }
      `,
    });
  }, []);

  useEffect(() => {
    return () => {
      shadowTexture.dispose();
      headlightMaterial.dispose();
      beamMaterial.dispose();
      roadMaterial.dispose();
    };
  }, [shadowTexture, headlightMaterial, beamMaterial, roadMaterial]);

  useFrame(() => {
    const aspect = Math.max(0.8, size.width / Math.max(1, size.height));
    const carLen = INTRO_CONFIG.baseCarLength * INTRO_CONFIG.carScale;
    const targetVisibleWidth = carLen / INTRO_CONFIG.targetWidthRatio;
    const desiredVisibleHeight = Math.max(2.45, targetVisibleWidth / aspect);
    const halfFovRad = THREE.MathUtils.degToRad(INTRO_CONFIG.cameraFov / 2);
    const baseCameraZ = desiredVisibleHeight / (2 * Math.tan(halfFovRad));

    const visibleWidthAtOrigin = desiredVisibleHeight * aspect;
    const exitX = visibleWidthAtOrigin * 0.5 + carLen * 0.72;
    exitXRef.current = exitX;

    const pose = evaluateTimeline(progressRef.current, exitX);

    if (rootRef.current) {
      rootRef.current.position.set(pose.x, 0, pose.z);
      rootRef.current.rotation.y = pose.yaw;
    }
    if (bodyTiltRef.current) {
      bodyTiltRef.current.rotation.z = pose.pitch;
      bodyTiltRef.current.rotation.x = pose.roll;
    }

    for (let i = 0; i < 4; i++) {
      const wheel = wheelRefs.current[i];
      if (wheel) wheel.rotation.z = pose.wheelAngle;
    }

    if (shadowDecalRef.current) {
      shadowDecalRef.current.position.set(pose.x, 0.004, pose.z);
      shadowDecalRef.current.rotation.y = pose.yaw;
      const mat = shadowDecalRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 * pose.revealIntensity;
    }

    headlightMaterial.emissiveIntensity = 3.2 * pose.headlightIntensity;
    beamMaterial.opacity = 0.16 * pose.headlightIntensity;

    if (headlightSpotRef.current) {
      headlightSpotRef.current.intensity = 3.4 * pose.headlightIntensity;
    }

    if (keyLightRef.current) keyLightRef.current.intensity = 0.08 + 1.95 * pose.revealIntensity;
    if (rimLightRef.current) rimLightRef.current.intensity = 0.05 + 1.55 * pose.revealIntensity;
    if (ambientRef.current) ambientRef.current.intensity = 0.04 + 0.36 * pose.revealIntensity;

    roadMaterial.uniforms.uCarPos.value.set(pose.x, pose.z);
    roadMaterial.uniforms.uHeadlightPower.value = pose.headlightIntensity;
    roadMaterial.uniforms.uReveal.value = pose.revealIntensity;

    const { cameraStart, cameraSide } = INTRO_CONFIG;
    const b = pose.cameraBlend;

    const camX = THREE.MathUtils.lerp(cameraStart.xOffset, 0, b);
    const camY = THREE.MathUtils.lerp(cameraStart.y, cameraSide.y, b);
    const camZ = THREE.MathUtils.lerp(baseCameraZ * cameraStart.zFactor, baseCameraZ, b);

    camera.position.set(camX, camY, camZ);
    lookTargetVec.set(
      THREE.MathUtils.lerp(cameraStart.lookAt[0], cameraSide.lookAt[0], b),
      THREE.MathUtils.lerp(cameraStart.lookAt[1], cameraSide.lookAt[1], b),
      THREE.MathUtils.lerp(cameraStart.lookAt[2], cameraSide.lookAt[2], b)
    );
    camera.lookAt(lookTargetVec);
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={INTRO_CONFIG.cameraFov} near={0.1} far={100} />

      <ambientLight ref={ambientRef} color={INTRO_CONFIG.colors.lilac} intensity={0.04} />
      <directionalLight
        ref={keyLightRef}
        position={[3.5, 5.5, 6.0]}
        color="#fff6ec"
        intensity={0.08}
      />
      <directionalLight
        ref={rimLightRef}
        position={[-4.5, 3.0, -3.5]}
        color={INTRO_CONFIG.colors.gold}
        intensity={0.05}
      />

      <Environment resolution={64} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#fff4e0"
          scale={[10, 2, 1]}
          position={[0, 5, 2]}
          rotation={[Math.PI / 2.4, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.6}
          color={INTRO_CONFIG.colors.lilac}
          scale={[12, 3, 1]}
          position={[0, 1.5, -5]}
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          color={INTRO_CONFIG.colors.gold}
          scale={[6, 1.2, 1]}
          position={[4, 0.8, 3]}
        />
      </Environment>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.002, 0]} material={roadMaterial}>
        <planeGeometry args={[20, 3.6]} />
      </mesh>

      <mesh ref={shadowDecalRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 0]}>
        <planeGeometry args={[5.1 * INTRO_CONFIG.carScale, 2.35 * INTRO_CONFIG.carScale]} />
        <meshBasicMaterial
          map={shadowTexture}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      <FuturisticSedan
        refs={{
          rootRef,
          bodyTiltRef,
          wheelRefs,
          headlightSpotRef,
          headlightMaterial,
          beamMaterial,
        }}
      />

      <GoldenTrails progressRef={progressRef} exitXRef={exitXRef} />
    </>
  );
});

IntroStageScene.displayName = 'IntroStageScene';
