/* eslint-disable */
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface TechRobotCompanionProps {
  /** Base scale of the 3D robot in world units (default: 0.95) */
  scale?: number;
  /** How smoothly the robot follows the cursor (default: 0.045) */
  followEase?: number;
  /** Autonomous idle roam speed (default: 0.6) */
  idleSpeed?: number;
}

export default function TechRobotCompanion({
  scale = 0.95,
  followEase = 0.042,
  idleSpeed = 0.55,
}: TechRobotCompanionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Transparent Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / Math.max(window.innerHeight, 1),
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    // Lighting — cool key, warm gold rim, soft cyan under-glow
    const ambient = new THREE.AmbientLight(0xd8e6ff, 0.75);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.85);
    keyLight.position.set(6, 9, 10);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xf5c36c, 1.35);
    rimLight.position.set(-8, 4, -5);
    scene.add(rimLight);

    const cyanFill = new THREE.PointLight(0x38bdf8, 1.6, 18);
    cyanFill.position.set(0, -3, 6);
    scene.add(cyanFill);

    // Materials
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x161b28,
      metalness: 0.72,
      roughness: 0.28,
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0x2a3347,
      metalness: 0.82,
      roughness: 0.22,
    });
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      metalness: 0.9,
      roughness: 0.12,
    });
    const cyanGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });
    const goldGlowMat = new THREE.MeshBasicMaterial({
      color: 0xf5c36c,
    });

    // Root Robot Group
    const bot = new THREE.Group();
    bot.scale.setScalar(scale);
    scene.add(bot);

    // ── Head Group ──
    const head = new THREE.Group();
    head.position.set(0, 0.42, 0);
    bot.add(head);

    // Cranium (sleek beveled box-like capsule using scaled sphere + cylinder)
    const cranium = new THREE.Mesh(
      new THREE.SphereGeometry(0.54, 28, 24),
      armorMat
    );
    cranium.scale.set(1.12, 0.88, 0.96);
    head.add(cranium);

    // Visor plate
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.86, 0.36, 0.22),
      visorMat
    );
    visor.position.set(0, 0.0, 0.41);
    head.add(visor);

    // Visor rim frame
    const visorRim = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.42, 0.18),
      trimMat
    );
    visorRim.position.set(0, 0.0, 0.39);
    head.add(visorRim);

    // Expressive glowing eyes
    const eyeGeo = new THREE.CapsuleGeometry(0.055, 0.09, 8, 12);
    const leftEye = new THREE.Mesh(eyeGeo, cyanGlowMat);
    leftEye.position.set(-0.2, 0.01, 0.53);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, cyanGlowMat);
    rightEye.position.set(0.2, 0.01, 0.53);
    head.add(rightEye);

    // Ear/sensor pods
    const earGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.12, 18);
    earGeo.rotateZ(Math.PI / 2);
    const leftEar = new THREE.Mesh(earGeo, trimMat);
    leftEar.position.set(-0.62, 0.02, 0);
    head.add(leftEar);
    const rightEar = new THREE.Mesh(earGeo, trimMat);
    rightEar.position.set(0.62, 0.02, 0);
    head.add(rightEar);

    // Antenna + pulsing gold beacon
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.032, 0.34, 10),
      trimMat
    );
    stalk.position.set(0.22, 0.56, -0.05);
    stalk.rotation.z = -0.18;
    head.add(stalk);

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 14, 14),
      goldGlowMat
    );
    beacon.position.set(0.25, 0.74, -0.05);
    head.add(beacon);

    // ── Torso / Core Group ──
    const torso = new THREE.Group();
    torso.position.set(0, -0.28, 0);
    bot.add(torso);

    const chassis = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.24, 0.62, 24),
      armorMat
    );
    torso.add(chassis);

    // Chest reactor ring
    const chestRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.13, 0.025, 12, 24),
      goldGlowMat
    );
    chestRing.position.set(0, 0.06, 0.32);
    torso.add(chestRing);

    const chestCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 16, 16),
      cyanGlowMat
    );
    chestCore.position.set(0, 0.06, 0.32);
    torso.add(chestCore);

    // Floating side thruster arms
    const armGeo = new THREE.CapsuleGeometry(0.085, 0.26, 8, 14);
    const leftArm = new THREE.Mesh(armGeo, trimMat);
    leftArm.position.set(-0.54, 0.04, 0.04);
    leftArm.rotation.z = 0.25;
    torso.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, trimMat);
    rightArm.position.set(0.54, 0.04, 0.04);
    rightArm.rotation.z = -0.25;
    torso.add(rightArm);

    // Bottom hover thruster ring
    const hoverRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.24, 0.022, 12, 28),
      cyanGlowMat
    );
    hoverRing.rotation.x = Math.PI / 2;
    hoverRing.position.set(0, -0.38, 0);
    torso.add(hoverRing);

    // Helper: convert normalized screen coords to world coords at z=0
    const getViewBounds = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      const h = 2 * Math.tan(vFov / 2) * camera.position.z;
      const w = h * camera.aspect;
      return { w, h };
    };

    let bounds = getViewBounds();
    const targetPos = new THREE.Vector3(bounds.w * 0.28, bounds.h * 0.12, 0);
    const currentPos = new THREE.Vector3(bounds.w * 0.28, bounds.h * 0.12, 0);
    const velocity = new THREE.Vector3();
    let lastPointerTime = 0;
    let pointerNormX = 0.65;
    let pointerNormY = 0.45;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      const ny = -((e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1);
      pointerNormX = nx;
      pointerNormY = ny;
      lastPointerTime = performance.now();

      // Offset slightly so the bot hovers beside the cursor rather than covering it
      targetPos.x = nx * (bounds.w * 0.46) - 0.85;
      targetPos.y = ny * (bounds.h * 0.44) + 0.55;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / Math.max(window.innerHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bounds = getViewBounds();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Animation loop
    let rafId = 0;
    const clock = new THREE.Clock();
    let nextBlink = 2.4;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const now = performance.now();

      // Gentle autonomous figure-8 roam if pointer is idle > 2.5s
      if (now - lastPointerTime > 2500) {
        const roamT = t * idleSpeed;
        targetPos.x = Math.sin(roamT * 0.7) * (bounds.w * 0.34);
        targetPos.y = Math.sin(roamT * 1.15) * (bounds.h * 0.26);
      }

      // Spring-damped follow
      const dx = targetPos.x - currentPos.x;
      const dy = targetPos.y - currentPos.y;
      velocity.x = (velocity.x + dx * followEase) * 0.82;
      velocity.y = (velocity.y + dy * followEase) * 0.82;
      currentPos.x += velocity.x;
      currentPos.y += velocity.y;

      // Hover bob
      const bob = Math.sin(t * 2.6) * 0.14;
      bot.position.set(currentPos.x, currentPos.y + bob, 0);

      // Bank/tilt into velocity + look gently toward cursor/camera
      const targetRotZ = THREE.MathUtils.clamp(-velocity.x * 1.1, -0.38, 0.38);
      const targetRotY = THREE.MathUtils.clamp(
        velocity.x * 1.4 + pointerNormX * 0.35,
        -0.65,
        0.65
      );
      const targetRotX = THREE.MathUtils.clamp(
        -velocity.y * 0.9 - pointerNormY * 0.2,
        -0.35,
        0.35
      );

      bot.rotation.z += (targetRotZ - bot.rotation.z) * 0.1;
      bot.rotation.y += (targetRotY - bot.rotation.y) * 0.08;
      bot.rotation.x += (targetRotX - bot.rotation.x) * 0.08;

      // Head independent micro-tilt
      head.rotation.y = Math.sin(t * 1.2) * 0.12 + pointerNormX * 0.18;
      head.rotation.x = Math.cos(t * 0.9) * 0.06 - pointerNormY * 0.12;

      // Arms float
      leftArm.position.y = 0.04 + Math.sin(t * 3.1) * 0.045;
      rightArm.position.y = 0.04 + Math.cos(t * 3.1) * 0.045;

      // Hover ring pulse
      const ringScale = 0.94 + Math.sin(t * 5.2) * 0.08;
      hoverRing.scale.set(ringScale, ringScale, 1);

      // Beacon pulse
      const beaconScale = 0.88 + Math.sin(t * 4.0) * 0.22;
      beacon.scale.setScalar(beaconScale);

      // Eye blink every ~3-4s
      if (t > nextBlink) {
        const blinkPhase = (t - nextBlink) * 14;
        if (blinkPhase < Math.PI) {
          const sy = Math.max(0.12, Math.abs(Math.cos(blinkPhase)));
          leftEye.scale.y = sy;
          rightEye.scale.y = sy;
        } else {
          leftEye.scale.y = 1;
          rightEye.scale.y = 1;
          nextBlink = t + 2.8 + Math.random() * 2.2;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scale, followEase, idleSpeed]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

