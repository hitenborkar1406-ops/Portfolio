import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { INTRO_CONFIG } from './introConfig';

export interface SedanRefs {
  rootRef: React.RefObject<THREE.Group | null>;
  bodyTiltRef: React.RefObject<THREE.Group | null>;
  wheelRefs: React.RefObject<(THREE.Group | null)[]>;
  headlightSpotRef: React.RefObject<THREE.PointLight | null>;
  headlightMaterial: THREE.MeshStandardMaterial;
  beamMaterial: THREE.MeshBasicMaterial;
}

interface WheelProps {
  position: [number, number, number];
  isRightSide: boolean;
  setRef: (el: THREE.Group | null) => void;
}

const StylizedWheel: React.FC<WheelProps> = ({ position, isRightSide, setRef }) => {
  const spokeAngles = [0, 1, 2, 3, 4].map((i) => (i * Math.PI * 2) / 5);
  const faceSign = isRightSide ? 1 : -1;

  return (
    <group position={position}>
      <group ref={setRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.33, 0.33, 0.24, 32]} />
          <meshStandardMaterial color="#140919" roughness={0.85} metalness={0.12} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.235, 0.235, 0.246, 24]} />
          <meshStandardMaterial color="#2a1634" roughness={0.35} metalness={0.75} />
        </mesh>

        <mesh position={[0, 0, faceSign * 0.116]}>
          <torusGeometry args={[0.225, 0.015, 10, 28]} />
          <meshStandardMaterial color="#e8dff0" roughness={0.25} metalness={0.85} />
        </mesh>

        {spokeAngles.map((angle, idx) => (
          <group key={idx} rotation={[0, 0, angle]} position={[0, 0, faceSign * 0.112]}>
            <mesh position={[0.105, 0.022, 0]} rotation={[0, 0, 0.14]}>
              <boxGeometry args={[0.18, 0.022, 0.018]} />
              <meshStandardMaterial color="#f2ecf7" roughness={0.25} metalness={0.85} />
            </mesh>
            <mesh position={[0.105, -0.022, 0]} rotation={[0, 0, -0.14]}>
              <boxGeometry args={[0.18, 0.018, 0.018]} />
              <meshStandardMaterial color="#cfc0da" roughness={0.3} metalness={0.8} />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 0, faceSign * 0.122]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.048, 0.055, 0.022, 16]} />
          <meshStandardMaterial
            color={INTRO_CONFIG.colors.gold}
            emissive={INTRO_CONFIG.colors.gold}
            emissiveIntensity={0.25}
            roughness={0.25}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
};

export const FuturisticSedan: React.FC<{ refs: SedanRefs }> = ({ refs }) => {
  const geometries = useMemo(() => {
    const archRadius = 0.39;
    const archCenterY = 0.33;
    const sillY = 0.2;
    const angle = Math.asin((sillY - archCenterY) / archRadius);

    const bodyShape = new THREE.Shape();
    bodyShape.moveTo(-2.06, sillY);
    bodyShape.lineTo(-1.32 - archRadius * Math.cos(angle), sillY);
    bodyShape.absarc(-1.32, archCenterY, archRadius, Math.PI - angle, angle, true);
    bodyShape.lineTo(1.34 - archRadius * Math.cos(angle), sillY);
    bodyShape.absarc(1.34, archCenterY, archRadius, Math.PI - angle, angle, true);
    bodyShape.lineTo(2.19, 0.19);
    bodyShape.lineTo(2.21, 0.28);
    bodyShape.quadraticCurveTo(2.2, 0.39, 2.02, 0.45);
    bodyShape.bezierCurveTo(1.66, 0.55, 1.16, 0.62, 0.78, 0.66);
    bodyShape.bezierCurveTo(0.15, 0.68, -0.75, 0.7, -1.62, 0.75);
    bodyShape.lineTo(-2.12, 0.69);
    bodyShape.lineTo(-2.19, 0.48);
    bodyShape.lineTo(-2.06, sillY);

    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      depth: 1.58,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.055,
      bevelSegments: 4,
      curveSegments: 28,
    });
    bodyGeo.translate(0, 0, -0.79);
    bodyGeo.computeVertexNormals();

    const hoodShape = new THREE.Shape();
    hoodShape.moveTo(0.82, 0.65);
    hoodShape.bezierCurveTo(1.22, 0.64, 1.66, 0.56, 1.98, 0.45);
    hoodShape.lineTo(1.88, 0.43);
    hoodShape.lineTo(0.8, 0.61);
    hoodShape.closePath();

    const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, {
      depth: 0.78,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.025,
      bevelSegments: 3,
      curveSegments: 16,
    });
    hoodGeo.translate(0, 0, -0.39);
    hoodGeo.computeVertexNormals();

    const glassShape = new THREE.Shape();
    glassShape.moveTo(0.8, 0.63);
    glassShape.bezierCurveTo(0.55, 0.88, 0.3, 1.04, 0.06, 1.07);
    glassShape.bezierCurveTo(-0.26, 1.1, -0.68, 1.06, -1.56, 0.72);
    glassShape.lineTo(-1.54, 0.66);
    glassShape.lineTo(0.78, 0.61);
    glassShape.closePath();

    const glassGeo = new THREE.ExtrudeGeometry(glassShape, {
      depth: 1.24,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.035,
      bevelSegments: 3,
      curveSegments: 24,
    });
    glassGeo.translate(0, 0, -0.62);
    glassGeo.computeVertexNormals();

    const roofShape = new THREE.Shape();
    roofShape.moveTo(0.75, 0.65);
    roofShape.bezierCurveTo(0.51, 0.89, 0.27, 1.06, 0.05, 1.09);
    roofShape.bezierCurveTo(-0.28, 1.12, -0.68, 1.08, -1.54, 0.74);
    roofShape.lineTo(-1.46, 0.71);
    roofShape.bezierCurveTo(-0.68, 1.02, -0.28, 1.06, 0.04, 1.03);
    roofShape.bezierCurveTo(0.26, 1.0, 0.48, 0.84, 0.69, 0.64);
    roofShape.closePath();

    const roofGeo = new THREE.ExtrudeGeometry(roofShape, {
      depth: 1.14,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.018,
      bevelSegments: 2,
      curveSegments: 24,
    });
    roofGeo.translate(0, 0, -0.57);
    roofGeo.computeVertexNormals();

    const beamGeo = new THREE.ConeGeometry(0.46, 2.3, 24, 1, true);
    beamGeo.translate(0, -1.15, 0);
    beamGeo.rotateZ(Math.PI / 2);

    const headlightBladeGeo = new THREE.BoxGeometry(0.19, 0.042, 0.26);

    return { bodyGeo, hoodGeo, glassGeo, roofGeo, beamGeo, headlightBladeGeo };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(geometries).forEach((g) => g.dispose());
    };
  }, [geometries]);

  const scale = INTRO_CONFIG.carScale;
  const { bodyWhite, glassTint, gold } = INTRO_CONFIG.colors;

  return (
    <group ref={refs.rootRef} scale={[scale, scale, scale]}>
      <group ref={refs.bodyTiltRef}>
        <mesh geometry={geometries.bodyGeo} castShadow receiveShadow>
          <meshStandardMaterial
            color={bodyWhite}
            roughness={0.34}
            metalness={0.14}
            envMapIntensity={0.85}
          />
        </mesh>

        <mesh geometry={geometries.hoodGeo} castShadow>
          <meshStandardMaterial
            color="#faf6fd"
            roughness={0.3}
            metalness={0.16}
            envMapIntensity={0.95}
          />
        </mesh>

        <mesh geometry={geometries.glassGeo}>
          <meshStandardMaterial
            color={glassTint}
            roughness={0.14}
            metalness={0.55}
            envMapIntensity={1.2}
          />
        </mesh>

        <mesh geometry={geometries.roofGeo} castShadow>
          <meshStandardMaterial
            color={bodyWhite}
            roughness={0.32}
            metalness={0.15}
            envMapIntensity={0.9}
          />
        </mesh>

        <mesh position={[2.16, 0.25, 0]}>
          <boxGeometry args={[0.1, 0.09, 1.12]} />
          <meshStandardMaterial color="#120618" roughness={0.6} metalness={0.3} />
        </mesh>
        <mesh position={[-2.11, 0.24, 0]}>
          <boxGeometry args={[0.14, 0.1, 1.32]} />
          <meshStandardMaterial color="#120618" roughness={0.6} metalness={0.3} />
        </mesh>

        {[-1, 1].map((side) => (
          <mesh key={`trim-${side}`} position={[-0.02, 0.22, side * 0.855]}>
            <boxGeometry args={[1.64, 0.022, 0.02]} />
            <meshStandardMaterial
              color={gold}
              emissive={gold}
              emissiveIntensity={0.35}
              roughness={0.25}
              metalness={0.85}
            />
          </mesh>
        ))}

        <mesh position={[2.205, 0.2, 0]}>
          <boxGeometry args={[0.04, 0.018, 1.38]} />
          <meshStandardMaterial
            color={gold}
            emissive={gold}
            emissiveIntensity={0.4}
            roughness={0.25}
            metalness={0.85}
          />
        </mesh>

        <mesh position={[-2.17, 0.56, 0]}>
          <boxGeometry args={[0.04, 0.036, 1.46]} />
          <meshStandardMaterial
            color={gold}
            emissive={gold}
            emissiveIntensity={1.6}
            roughness={0.2}
          />
        </mesh>

        {[-1, 1].map((side) => (
          <mesh key={`mirror-${side}`} position={[0.56, 0.72, side * 0.78]} rotation={[0, side * 0.25, 0]}>
            <boxGeometry args={[0.18, 0.05, 0.12]} />
            <meshStandardMaterial color={bodyWhite} roughness={0.32} metalness={0.18} />
          </mesh>
        ))}

        {/* Both Left & Right Headlight Blades + Beam Cones share animated materials */}
        {[-1, 1].map((side) => (
          <group key={`headlight-${side}`} position={[2.11, 0.4, side * 0.56]} rotation={[0, side * -0.18, 0]}>
            <mesh geometry={geometries.headlightBladeGeo} material={refs.headlightMaterial} />
            <mesh
              geometry={geometries.beamGeo}
              material={refs.beamMaterial}
              position={[0.08, -0.02, 0]}
              rotation={[0, 0, -0.04]}
            />
          </group>
        ))}

        <pointLight
          ref={refs.headlightSpotRef}
          position={[2.65, 0.42, 0]}
          color="#ffe399"
          intensity={0}
          distance={6.5}
          decay={2}
        />
      </group>

      <StylizedWheel
        position={[1.34, 0.33, 0.76]}
        isRightSide={true}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[0] = el;
        }}
      />
      <StylizedWheel
        position={[1.34, 0.33, -0.76]}
        isRightSide={false}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[1] = el;
        }}
      />
      <StylizedWheel
        position={[-1.32, 0.33, 0.76]}
        isRightSide={true}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[2] = el;
        }}
      />
      <StylizedWheel
        position={[-1.32, 0.33, -0.76]}
        isRightSide={false}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[3] = el;
        }}
      />
    </group>
  );
};
