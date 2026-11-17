import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { INTRO_CONFIG } from '../config/introConfig';
import { evaluateTimeline } from '../config/motionTimeline';

interface GoldenTrailsProps {
  progressRef: React.MutableRefObject<number>;
  exitXRef: React.MutableRefObject<number>;
}

const TRAIL_SEGMENTS = 26;
const TRAIL_TIME_WINDOW = 0.085;

interface TrailRibbonDef {
  localOffset: [number, number, number];
  halfHeight: number;
}

const RIBBON_DEFS: TrailRibbonDef[] = [
  { localOffset: [-2.12, 0.56, 0.72], halfHeight: 0.022 },
  { localOffset: [-2.12, 0.56, -0.72], halfHeight: 0.022 },
  { localOffset: [-1.85, 0.22, 0.85], halfHeight: 0.016 },
];

export const GoldenTrails: React.FC<GoldenTrailsProps> = ({ progressRef, exitXRef }) => {
  const matRefs = useRef<(THREE.ShaderMaterial | null)[]>([]);
  const geoRefs = useRef<(THREE.BufferGeometry | null)[]>([]);

  const ribbons = useMemo(() => {
    return RIBBON_DEFS.map((def) => {
      const vertCount = TRAIL_SEGMENTS * 2;
      const positions = new Float32Array(vertCount * 3);
      const trailProgress = new Float32Array(vertCount);
      const indices: number[] = [];

      for (let i = 0; i < TRAIL_SEGMENTS; i++) {
        const u = i / (TRAIL_SEGMENTS - 1);
        trailProgress[i * 2] = u;
        trailProgress[i * 2 + 1] = u;

        if (i < TRAIL_SEGMENTS - 1) {
          const a = i * 2;
          const b = a + 1;
          const c = a + 2;
          const d = a + 3;
          indices.push(a, b, c, b, d, c);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('aProgress', new THREE.BufferAttribute(trailProgress, 1));
      geometry.setIndex(indices);

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: {
          uOpacity: { value: 0 },
          uCoreColor: { value: new THREE.Color(INTRO_CONFIG.colors.gold) },
          uTailColor: { value: new THREE.Color(INTRO_CONFIG.colors.lilac) },
        },
        vertexShader: `
          attribute float aProgress;
          varying float vProgress;
          void main() {
            vProgress = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uOpacity;
          uniform vec3 uCoreColor;
          uniform vec3 uTailColor;
          varying float vProgress;
          void main() {
            float fade = pow(1.0 - vProgress, 2.3) * uOpacity;
            vec3 color = mix(uCoreColor, uTailColor, smoothstep(0.15, 0.95, vProgress));
            gl_FragColor = vec4(color, fade * 0.72);
          }
        `,
      });

      return { def, geometry, material };
    });
  }, []);

  useEffect(() => {
    return () => {
      ribbons.forEach((r) => {
        r.geometry.dispose();
        r.material.dispose();
      });
    };
  }, [ribbons]);

  useFrame(() => {
    const p = progressRef.current;
    const exitX = exitXRef.current;
    const currentPose = evaluateTimeline(p, exitX);
    const scale = INTRO_CONFIG.carScale;
    const startThreshold = 0.8 / 6.0;

    ribbons.forEach((ribbon, idx) => {
      const mat = matRefs.current[idx];
      const geo = geoRefs.current[idx];
      if (!mat || !geo) return;

      mat.uniforms.uOpacity.value = currentPose.trailOpacity;
      if (currentPose.trailOpacity <= 0.002) return;

      const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const [ox, oy, oz] = ribbon.def.localOffset;
      const hh = ribbon.def.halfHeight * scale;

      for (let i = 0; i < TRAIL_SEGMENTS; i++) {
        const u = i / (TRAIL_SEGMENTS - 1);
        const sampleP = Math.max(startThreshold, p - u * TRAIL_TIME_WINDOW);
        const pose = evaluateTimeline(sampleP, exitX);

        const cosY = Math.cos(pose.yaw);
        const sinY = Math.sin(pose.yaw);

        const wx = pose.x + (ox * scale * cosY + oz * scale * sinY);
        const wz = pose.z + (-ox * scale * sinY + oz * scale * cosY);
        const wy = oy * scale;

        const base = i * 6;
        arr[base] = wx;
        arr[base + 1] = wy + hh;
        arr[base + 2] = wz;

        arr[base + 3] = wx;
        arr[base + 4] = wy - hh;
        arr[base + 5] = wz;
      }

      posAttr.needsUpdate = true;
      geo.computeBoundingSphere();
    });
  });

  return (
    <group>
      {ribbons.map((ribbon, idx) => (
        <mesh
          key={idx}
          geometry={ribbon.geometry}
          material={ribbon.material}
          frustumCulled={false}
          ref={(mesh) => {
            if (mesh) {
              geoRefs.current[idx] = mesh.geometry;
              matRefs.current[idx] = mesh.material as THREE.ShaderMaterial;
            }
          }}
        />
      ))}
    </group>
  );
};
