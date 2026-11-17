import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { INTRO_CONFIG } from '../config/introConfig';

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

/**
 * High-performance BMW M Competition Wheel
 * Features stationary cross-drilled ceramic brake rotor + M-Sport Blue Caliper,
 * with rotating 5-double-spoke lightweight alloy rim and BMW Roundel center cap.
 */
const BMWCompetitionWheel: React.FC<WheelProps> = ({ position, isRightSide, setRef }) => {
  const faceSign = isRightSide ? 1 : -1;
  // 5 pairs of double spokes (10 spokes total)
  const spokePairs = [0, 1, 2, 3, 4].map((i) => (i * Math.PI * 2) / 5);

  return (
    <group position={position}>
      {/* Stationary Brake Assembly (Caliper stays fixed while wheel spins) */}
      <group position={[0, 0, faceSign * 0.05]}>
        {/* Perforated Brake Rotor Disc */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.035, 32]} />
          <meshStandardMaterial color="#8e9299" roughness={0.32} metalness={0.88} />
        </mesh>
        {/* Rotor Hub Bell */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, faceSign * 0.02]}>
          <cylinderGeometry args={[0.11, 0.11, 0.04, 24]} />
          <meshStandardMaterial color="#2a2c32" roughness={0.5} metalness={0.7} />
        </mesh>
        {/* Iconic BMW M-Performance Blue Brake Caliper at 11 o'clock position */}
        <group position={[-0.07, 0.14, faceSign * 0.02]} rotation={[0, 0, 0.42]}>
          <mesh>
            <boxGeometry args={[0.13, 0.075, 0.065]} />
            <meshStandardMaterial color="#0066B2" roughness={0.25} metalness={0.65} />
          </mesh>
          {/* M Caliper White Accent Stripe */}
          <mesh position={[0, 0, faceSign * 0.034]}>
            <boxGeometry args={[0.07, 0.015, 0.005]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.2} />
          </mesh>
        </group>
      </group>

      {/* Rotating Wheel Group (spins with vehicle velocity) */}
      <group ref={setRef}>
        {/* Outer Michelin Sport Cup Tire */}
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.33, 0.33, 0.23, 32]} />
          <meshStandardMaterial color="#111114" roughness={0.9} metalness={0.08} />
        </mesh>

        {/* Deep Rim Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.265, 0.265, 0.236, 28]} />
          <meshStandardMaterial color="#1f2024" roughness={0.35} metalness={0.85} />
        </mesh>

        {/* Diamond Cut Outer Lip */}
        <mesh position={[0, 0, faceSign * 0.115]}>
          <torusGeometry args={[0.255, 0.012, 10, 32]} />
          <meshStandardMaterial color="#e6e7ec" roughness={0.2} metalness={0.92} />
        </mesh>

        {/* 5 Pairs of M Double Spokes */}
        {spokePairs.map((angle, idx) => (
          <group key={idx} rotation={[0, 0, angle]} position={[0, 0, faceSign * 0.11]}>
            {/* Spoke A */}
            <mesh position={[0.125, 0.018, 0]} rotation={[0, 0, 0.08]}>
              <boxGeometry args={[0.21, 0.018, 0.016]} />
              <meshStandardMaterial color="#f0f2f7" roughness={0.22} metalness={0.9} />
            </mesh>
            {/* Spoke B */}
            <mesh position={[0.125, -0.018, 0]} rotation={[0, 0, -0.08]}>
              <boxGeometry args={[0.21, 0.018, 0.016]} />
              <meshStandardMaterial color="#c2c5ce" roughness={0.28} metalness={0.85} />
            </mesh>
          </group>
        ))}

        {/* BMW Center Floating Roundel */}
        <group position={[0, 0, faceSign * 0.122]} rotation={[Math.PI / 2, 0, 0]}>
          {/* Bezel Ring */}
          <mesh>
            <cylinderGeometry args={[0.048, 0.048, 0.018, 24]} />
            <meshStandardMaterial color="#1a1a1e" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Blue Quarter */}
          <mesh position={[0, faceSign * 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.034, 16, 0, Math.PI / 2]} />
            <meshBasicMaterial color="#0066B2" />
          </mesh>
          {/* White Quarter */}
          <mesh position={[0, faceSign * 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.034, 16, Math.PI / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Blue Quarter 2 */}
          <mesh position={[0, faceSign * 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.034, 16, Math.PI, Math.PI / 2]} />
            <meshBasicMaterial color="#0066B2" />
          </mesh>
          {/* White Quarter 2 */}
          <mesh position={[0, faceSign * 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.034, 16, (3 * Math.PI) / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export const FuturisticSedan: React.FC<{ refs: SedanRefs }> = ({ refs }) => {
  const geometries = useMemo(() => {
    const archRadius = 0.385;
    const archCenterY = 0.33;
    const sillY = 0.19;
    const angle = Math.asin((sillY - archCenterY) / archRadius);

    // ── 1. Muscular BMW M-Coupe Body Silhouette ──────────────────────────
    const bodyShape = new THREE.Shape();
    bodyShape.moveTo(-2.14, sillY);
    // Rear Wheel Arch
    bodyShape.lineTo(-1.32 - archRadius * Math.cos(angle), sillY);
    bodyShape.absarc(-1.32, archCenterY, archRadius, Math.PI - angle, angle, true);
    // Side Skirt / Rocker
    bodyShape.lineTo(1.34 - archRadius * Math.cos(angle), sillY);
    // Front Wheel Arch
    bodyShape.absarc(1.34, archCenterY, archRadius, Math.PI - angle, angle, true);
    // Low Front Splitter Chin
    bodyShape.lineTo(2.24, 0.16);
    // Forward-leaning Shark Nose Bumper
    bodyShape.lineTo(2.26, 0.28);
    bodyShape.quadraticCurveTo(2.27, 0.40, 2.18, 0.49);
    // Long Muscular BMW Hood Line
    bodyShape.bezierCurveTo(1.82, 0.58, 1.30, 0.65, 0.82, 0.68);
    // Waistline below glass
    bodyShape.bezierCurveTo(0.15, 0.70, -0.75, 0.71, -1.64, 0.74);
    // Integrated Rear Decklid Lip Spoiler (Ducktail)
    bodyShape.lineTo(-2.16, 0.72);
    // Aggressive Vertical Rear Diffuser Valance
    bodyShape.lineTo(-2.20, 0.46);
    bodyShape.lineTo(-2.14, sillY);

    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      depth: 1.62,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.05,
      bevelSegments: 4,
      curveSegments: 32,
    });
    bodyGeo.translate(0, 0, -0.81);
    bodyGeo.computeVertexNormals();

    // ── 2. Sculpted BMW Power Dome Hood ──────────────────────────────────
    const hoodShape = new THREE.Shape();
    hoodShape.moveTo(0.84, 0.67);
    hoodShape.bezierCurveTo(1.24, 0.66, 1.74, 0.59, 2.14, 0.48);
    hoodShape.lineTo(2.04, 0.45);
    hoodShape.lineTo(0.82, 0.63);
    hoodShape.closePath();

    const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, {
      depth: 0.84,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.03,
      bevelSegments: 3,
      curveSegments: 20,
    });
    hoodGeo.translate(0, 0, -0.42);
    hoodGeo.computeVertexNormals();

    // ── 3. BMW Greenhouse with Signature Hofmeister Kink ────────────────
    const glassShape = new THREE.Shape();
    // Base of A-Pillar
    glassShape.moveTo(0.80, 0.65);
    // Steep raked windshield
    glassShape.bezierCurveTo(0.52, 0.90, 0.28, 1.05, 0.05, 1.08);
    // Sleek fastback roof slope
    glassShape.bezierCurveTo(-0.30, 1.10, -0.72, 1.05, -1.35, 0.84);
    // Iconic Hofmeister Kink forward bend!
    glassShape.lineTo(-1.24, 0.73);
    glassShape.lineTo(-1.58, 0.70);
    // Bottom window sill
    glassShape.lineTo(0.78, 0.63);
    glassShape.closePath();

    const glassGeo = new THREE.ExtrudeGeometry(glassShape, {
      depth: 1.28,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.03,
      bevelSegments: 3,
      curveSegments: 24,
    });
    glassGeo.translate(0, 0, -0.64);
    glassGeo.computeVertexNormals();

    // ── 4. BMW M Carbon Fiber Roof with Center Recess Channel ───────────
    const roofShape = new THREE.Shape();
    roofShape.moveTo(0.76, 0.67);
    roofShape.bezierCurveTo(0.48, 0.92, 0.26, 1.07, 0.04, 1.10);
    roofShape.bezierCurveTo(-0.30, 1.12, -0.72, 1.08, -1.52, 0.74);
    roofShape.lineTo(-1.44, 0.71);
    roofShape.bezierCurveTo(-0.68, 1.03, -0.28, 1.07, 0.02, 1.04);
    roofShape.bezierCurveTo(0.24, 1.01, 0.46, 0.85, 0.70, 0.65);
    roofShape.closePath();

    const roofGeo = new THREE.ExtrudeGeometry(roofShape, {
      depth: 1.16,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.018,
      bevelSegments: 2,
      curveSegments: 24,
    });
    roofGeo.translate(0, 0, -0.58);
    roofGeo.computeVertexNormals();

    // ── 5. Aerodynamic BMW Shark Fin Antenna ────────────────────────────
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.quadraticCurveTo(0.06, 0.05, 0.09, 0.08);
    finShape.lineTo(0.06, 0);
    finShape.closePath();

    const finGeo = new THREE.ExtrudeGeometry(finShape, {
      depth: 0.022,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 2,
    });
    finGeo.translate(-0.045, 0, -0.011);

    // ── 6. Iconic Kidney Grille Frame & Vertical Slats ──────────────────
    const kidneyBezelGeo = new THREE.TorusGeometry(0.12, 0.018, 12, 28);

    // ── 7. Angel-Eye DRL Headlight Hex Tubes ────────────────────────────
    const angelEyeGeo = new THREE.TorusGeometry(0.052, 0.012, 8, 6);

    // ── 8. Headlight Projector Beam Cone ────────────────────────────────
    const beamGeo = new THREE.ConeGeometry(0.48, 2.5, 24, 1, true);
    beamGeo.translate(0, -1.25, 0);
    beamGeo.rotateZ(Math.PI / 2);

    return { bodyGeo, hoodGeo, glassGeo, roofGeo, finGeo, kidneyBezelGeo, angelEyeGeo, beamGeo };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(geometries).forEach((g) => g.dispose());
    };
  }, [geometries]);

  const scale = INTRO_CONFIG.carScale;
  const { glassTint, gold } = INTRO_CONFIG.colors;

  // Premium BMW M Metallic Pearl Alpine Finish
  const alpineBody = '#f4f5f9';
  const mGlossBlack = '#0c0d10';
  const mBlue = '#0066B2';
  const mDarkBlue = '#001E50';
  const mRed = '#E51A24';
  const mChrome = '#dcdde3';

  return (
    <group ref={refs.rootRef} scale={[scale, scale, scale]}>
      <group ref={refs.bodyTiltRef}>
        {/* ── Main BMW M Body Chassis ────────────────────────────── */}
        <mesh geometry={geometries.bodyGeo} castShadow receiveShadow>
          <meshStandardMaterial
            color={alpineBody}
            roughness={0.22}
            metalness={0.45}
            envMapIntensity={1.25}
          />
        </mesh>

        {/* ── Muscular BMW Hood with Center Power Dome ───────────── */}
        <mesh geometry={geometries.hoodGeo} castShadow>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.18}
            metalness={0.42}
            envMapIntensity={1.35}
          />
        </mesh>

        {/* ── Dark Tinted Windshield & Hofmeister Kink Glass ─────── */}
        <mesh geometry={geometries.glassGeo}>
          <meshStandardMaterial
            color={glassTint}
            roughness={0.08}
            metalness={0.7}
            envMapIntensity={1.6}
          />
        </mesh>

        {/* ── Carbon Fiber Roof (M Sport Shadowline) ─────────────── */}
        <mesh geometry={geometries.roofGeo} castShadow>
          <meshStandardMaterial
            color="#18191d"
            roughness={0.35}
            metalness={0.65}
            envMapIntensity={1.1}
          />
        </mesh>

        {/* ── Aerodynamic Shark Fin Antenna atop Roof ───────────── */}
        <mesh
          geometry={geometries.finGeo}
          position={[-0.72, 1.08, 0]}
          rotation={[0, 0, 0.12]}
          castShadow
        >
          <meshStandardMaterial color={mGlossBlack} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* ── Front Kidney Grilles (Signature BMW Hallmark) ──────── */}
        {[-1, 1].map((side) => (
          <group key={`kidney-${side}`} position={[2.24, 0.39, side * 0.19]} rotation={[0, side * 0.1, 0]}>
            {/* Illuminated Outer Kidney Bezel Ring */}
            <mesh geometry={geometries.kidneyBezelGeo} rotation={[0, Math.PI / 2, 0]} scale={[1, 1.35, 1]}>
              <meshStandardMaterial
                color={mChrome}
                emissive={gold}
                emissiveIntensity={0.35}
                roughness={0.15}
                metalness={0.95}
              />
            </mesh>

            {/* Recessed Gloss Black Kidney Mesh Backing */}
            <mesh position={[-0.015, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.115, 0.115, 0.02, 24]} scale={[1, 1.32, 1]} />
              <meshStandardMaterial color="#08080a" roughness={0.7} metalness={0.3} />
            </mesh>

            {/* Vertical Twin M Kidney Slats */}
            {[-0.07, -0.025, 0.025, 0.07].map((offsetZ, sIdx) => {
              // Signature M-Tri-Color stripes on the right kidney
              let slatColor = '#1a1b20';
              if (side === -1 && sIdx === 1) slatColor = mBlue;
              if (side === -1 && sIdx === 2) slatColor = mDarkBlue;
              if (side === -1 && sIdx === 3) slatColor = mRed;

              return (
                <mesh key={`slat-${sIdx}`} position={[0.008, 0, offsetZ]} rotation={[0, 0, -0.08]}>
                  <boxGeometry args={[0.02, 0.22, 0.012]} />
                  <meshStandardMaterial
                    color={slatColor}
                    roughness={0.25}
                    metalness={slatColor !== '#1a1b20' ? 0.3 : 0.85}
                  />
                </mesh>
              );
            })}
          </group>
        ))}

        {/* ── BMW Roundel Hood Emblem (Above Kidneys) ───────────── */}
        <group position={[2.18, 0.525, 0]} rotation={[0.42, 0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.038, 0.038, 0.008, 24]} />
            <meshStandardMaterial color="#0b0b0e" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.028, 16, 0, Math.PI / 2]} />
            <meshBasicMaterial color={mBlue} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.028, 16, Math.PI / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.028, 16, Math.PI, Math.PI / 2]} />
            <meshBasicMaterial color={mBlue} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.028, 16, (3 * Math.PI) / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* ── Quad Angel-Eye / Laserlight DRL Headlights ─────────── */}
        {[-1, 1].map((side) => (
          <group
            key={`headlight-group-${side}`}
            position={[2.15, 0.43, side * 0.54]}
            rotation={[0, side * -0.16, 0]}
          >
            {/* Inner Angel Eye Halo */}
            <mesh
              geometry={geometries.angelEyeGeo}
              material={refs.headlightMaterial}
              position={[0, 0, side * -0.075]}
              rotation={[0, Math.PI / 2, 0]}
            />
            {/* Outer Angel Eye Halo */}
            <mesh
              geometry={geometries.angelEyeGeo}
              material={refs.headlightMaterial}
              position={[-0.025, 0, side * 0.075]}
              rotation={[0, Math.PI / 2, 0]}
            />
            {/* Projector Light Beam Cone */}
            <mesh
              geometry={geometries.beamGeo}
              material={refs.beamMaterial}
              position={[0.1, -0.02, 0]}
              rotation={[0, 0, -0.04]}
            />
          </group>
        ))}

        {/* ── Front M-Sport Lower Air Dam & Splitter ─────────────── */}
        <mesh position={[2.23, 0.22, 0]}>
          <boxGeometry args={[0.08, 0.12, 1.18]} />
          <meshStandardMaterial color={mGlossBlack} roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Carbon Lower Splitter Blade */}
        <mesh position={[2.25, 0.15, 0]}>
          <boxGeometry args={[0.06, 0.02, 1.48]} />
          <meshStandardMaterial color="#141416" roughness={0.3} metalness={0.85} />
        </mesh>

        {/* ── M Aerodynamic Side Air Curtains ────────────────────── */}
        {[-1, 1].map((side) => (
          <mesh key={`air-curtain-${side}`} position={[2.18, 0.26, side * 0.72]}>
            <boxGeometry args={[0.06, 0.18, 0.035]} />
            <meshStandardMaterial color={mGlossBlack} roughness={0.3} metalness={0.8} />
          </mesh>
        ))}

        {/* ── M Fender Air Breathers (Behind Front Wheels) ───────── */}
        {[-1, 1].map((side) => (
          <group key={`breather-${side}`} position={[0.92, 0.44, side * 0.835]}>
            <mesh>
              <boxGeometry args={[0.14, 0.08, 0.015]} />
              <meshStandardMaterial color={mGlossBlack} roughness={0.2} metalness={0.85} />
            </mesh>
            {/* M Logo Badge strip */}
            <mesh position={[0, 0, side * 0.009]}>
              <boxGeometry args={[0.06, 0.018, 0.004]} />
              <meshStandardMaterial
                color={gold}
                emissive={gold}
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
          </group>
        ))}

        {/* ── M Aerodynamic Twin-Stalk Wing Mirrors ──────────────── */}
        {[-1, 1].map((side) => (
          <group
            key={`mirror-${side}`}
            position={[0.62, 0.74, side * 0.82]}
            rotation={[0, side * 0.22, 0]}
          >
            {/* Mirror Housing */}
            <mesh>
              <boxGeometry args={[0.19, 0.055, 0.11]} />
              <meshStandardMaterial color={alpineBody} roughness={0.22} metalness={0.45} />
            </mesh>
            {/* Iconic M Upper Aero Winglet Horn */}
            <mesh position={[-0.02, 0.032, side * -0.02]} rotation={[0, 0, side * 0.2]}>
              <boxGeometry args={[0.12, 0.016, 0.024]} />
              <meshStandardMaterial color={mGlossBlack} roughness={0.2} metalness={0.85} />
            </mesh>
            {/* Mirror Stalk Base */}
            <mesh position={[-0.04, -0.045, side * -0.045]}>
              <cylinderGeometry args={[0.015, 0.02, 0.07, 12]} />
              <meshStandardMaterial color={mGlossBlack} roughness={0.3} metalness={0.8} />
            </mesh>
          </group>
        ))}

        {/* ── BMW L-Shaped 3D LED Taillights ─────────────────────── */}
        {[-1, 1].map((side) => (
          <group key={`taillight-${side}`} position={[-2.16, 0.55, side * 0.58]}>
            {/* Main horizontal light bar */}
            <mesh>
              <boxGeometry args={[0.04, 0.035, 0.38]} />
              <meshStandardMaterial
                color="#ff1a2b"
                emissive="#ff1122"
                emissiveIntensity={2.8}
                roughness={0.15}
              />
            </mesh>
            {/* L-Hook outer bend signature */}
            <mesh position={[0.06, -0.035, side * 0.17]}>
              <boxGeometry args={[0.14, 0.032, 0.04]} />
              <meshStandardMaterial
                color="#ff1a2b"
                emissive="#ff1122"
                emissiveIntensity={2.8}
                roughness={0.15}
              />
            </mesh>
          </group>
        ))}

        {/* ── Integrated Rear Ducktail Lip Spoiler ────────────────── */}
        <mesh position={[-2.14, 0.725, 0]} rotation={[0, 0, 0.18]}>
          <boxGeometry args={[0.07, 0.024, 1.34]} />
          <meshStandardMaterial color={mGlossBlack} roughness={0.25} metalness={0.85} />
        </mesh>

        {/* ── BMW Roundel Trunk Emblem ───────────────────────────── */}
        <group position={[-2.18, 0.60, 0]} rotation={[-0.15, Math.PI, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.008, 24]} />
            <meshStandardMaterial color="#0b0b0e" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.026, 16, 0, Math.PI / 2]} />
            <meshBasicMaterial color={mBlue} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.026, 16, Math.PI / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.026, 16, Math.PI, Math.PI / 2]} />
            <meshBasicMaterial color={mBlue} />
          </mesh>
          <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.026, 16, (3 * Math.PI) / 2, Math.PI / 2]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* ── Aggressive M Rear Aerodynamic Diffuser ──────────────── */}
        <mesh position={[-2.14, 0.22, 0]}>
          <boxGeometry args={[0.12, 0.12, 1.38]} />
          <meshStandardMaterial color={mGlossBlack} roughness={0.35} metalness={0.8} />
        </mesh>
        {/* Diffuser Aero Vertical Fins */}
        {[-0.26, -0.09, 0.09, 0.26].map((finZ, fIdx) => (
          <mesh key={`diffuser-fin-${fIdx}`} position={[-2.15, 0.21, finZ]}>
            <boxGeometry args={[0.16, 0.09, 0.016]} />
            <meshStandardMaterial color={mGlossBlack} roughness={0.3} metalness={0.85} />
          </mesh>
        ))}

        {/* ── BMW M Quad Round Exhaust Tips (2 Dual Chrome Pipes) ─── */}
        {[-0.56, -0.44, 0.44, 0.56].map((exhaustZ, eIdx) => (
          <group key={`exhaust-${eIdx}`} position={[-2.19, 0.22, exhaustZ]} rotation={[0, 0, Math.PI / 2]}>
            <mesh>
              <cylinderGeometry args={[0.042, 0.042, 0.08, 20]} />
              <meshStandardMaterial color="#e0e2e8" roughness={0.15} metalness={0.96} />
            </mesh>
            {/* Exhaust Interior Bore */}
            <mesh position={[0, -0.038, 0]}>
              <cylinderGeometry args={[0.034, 0.034, 0.01, 16]} />
              <meshBasicMaterial color="#08080a" />
            </mesh>
          </group>
        ))}

        {/* ── High-Intensity Dynamic Headlight Spot ───────────────── */}
        <pointLight
          ref={refs.headlightSpotRef}
          position={[2.7, 0.44, 0]}
          color="#ffeab3"
          intensity={0}
          distance={7.2}
          decay={2}
        />
      </group>

      {/* ── 4 BMW M Competition Double-Spoke Alloy Wheels ───────── */}
      <BMWCompetitionWheel
        position={[1.34, 0.33, 0.76]}
        isRightSide={true}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[0] = el;
        }}
      />
      <BMWCompetitionWheel
        position={[1.34, 0.33, -0.76]}
        isRightSide={false}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[1] = el;
        }}
      />
      <BMWCompetitionWheel
        position={[-1.32, 0.33, 0.76]}
        isRightSide={true}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[2] = el;
        }}
      />
      <BMWCompetitionWheel
        position={[-1.32, 0.33, -0.76]}
        isRightSide={false}
        setRef={(el) => {
          if (refs.wheelRefs.current) refs.wheelRefs.current[3] = el;
        }}
      />
    </group>
  );
};
