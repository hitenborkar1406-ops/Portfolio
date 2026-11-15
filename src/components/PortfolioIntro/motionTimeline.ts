import { INTRO_CONFIG } from './introConfig';

export interface CarPose {
  x: number;
  z: number;
  yaw: number;
  pitch: number;
  roll: number;
  wheelAngle: number;
  headlightIntensity: number;
  revealIntensity: number;
  trailOpacity: number;
  cameraBlend: number;
}

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
const easeInOutSine = (t: number): number => -(Math.cos(Math.PI * Math.min(1, Math.max(0, t))) - 1) / 2;

const START_X = -2.85;
const START_Z = -0.58;
const START_YAW = -0.75;
const TURN_END_X = -1.95;

const P0 = { x: START_X, z: START_Z };
const P1 = {
  x: START_X + 0.42 * Math.cos(START_YAW),
  z: START_Z - 0.42 * Math.sin(START_YAW),
};

function evalCubicBezier(u: number, p2x: number): { x: number; z: number; dx: number; dz: number } {
  const omt = 1 - u;
  const p2 = { x: p2x, z: 0 };
  const p3 = { x: TURN_END_X, z: 0 };

  const x =
    omt * omt * omt * P0.x +
    3 * omt * omt * u * P1.x +
    3 * omt * u * u * p2.x +
    u * u * u * p3.x;

  const z =
    omt * omt * omt * P0.z +
    3 * omt * omt * u * P1.z +
    3 * omt * u * u * p2.z +
    u * u * u * p3.z;

  const dx =
    3 * omt * omt * (P1.x - P0.x) +
    6 * omt * u * (p2.x - P1.x) +
    3 * u * u * (p3.x - p2.x);

  const dz =
    3 * omt * omt * (P1.z - P0.z) +
    6 * omt * u * (p2.z - P1.z) +
    3 * u * u * (p3.z - p2.z);

  return { x, z, dx, dz };
}

export function evaluateTimeline(normalizedProgress: number, exitX: number): CarPose {
  const p = Math.min(1, Math.max(0, normalizedProgress));
  const t = p * 6.0;
  const vCruise = INTRO_CONFIG.cruiseSpeed;
  const wheelR = INTRO_CONFIG.wheelRadius * INTRO_CONFIG.carScale;

  const p2x = TURN_END_X - vCruise / 4.5;
  const turnArcApprox = 1.05;

  // PHASE 1: 0.0s - 0.8s
  if (t <= 0.8) {
    const u = t / 0.8;
    return {
      x: START_X,
      z: START_Z,
      yaw: START_YAW,
      pitch: 0,
      roll: 0,
      wheelAngle: 0,
      headlightIntensity: easeOutCubic(u),
      revealIntensity: easeInOutSine(u),
      trailOpacity: 0,
      cameraBlend: 0,
    };
  }

  // PHASE 2: 0.8s - 1.8s
  if (t <= 1.8) {
    const u = (t - 0.8) / 1.0;
    const sParam = 1.5 * u * u - 0.5 * u * u * u;
    const { x, z, dx, dz } = evalCubicBezier(sParam, p2x);
    const yaw = Math.atan2(-dz, dx);

    const accelPulse = Math.sin(Math.PI * u);
    const turnDistance = turnArcApprox * sParam;

    return {
      x,
      z,
      yaw,
      pitch: -0.018 * accelPulse,
      roll: 0.032 * accelPulse,
      wheelAngle: -turnDistance / wheelR,
      headlightIntensity: 1,
      revealIntensity: 1,
      trailOpacity: easeInOutSine(Math.max(0, (u - 0.25) / 0.75)),
      cameraBlend: easeInOutSine(u),
    };
  }

  // PHASE 3: 1.8s - 4.8s
  if (t <= 4.8) {
    const dt = t - 1.8;
    const x = TURN_END_X + vCruise * dt;
    const distance = turnArcApprox + vCruise * dt;

    return {
      x,
      z: 0,
      yaw: 0,
      pitch: 0,
      roll: 0,
      wheelAngle: -distance / wheelR,
      headlightIntensity: 1,
      revealIntensity: 1,
      trailOpacity: 1,
      cameraBlend: 1,
    };
  }

  // PHASE 4: 4.8s - 6.0s
  const w = (t - 4.8) / 1.2;
  const phase3EndX = TURN_END_X + vCruise * 3.0;
  const baseExitDist = vCruise * 1.2;
  const totalNeeded = Math.max(baseExitDist + 0.5, exitX - phase3EndX);
  const extraAccelDist = totalNeeded - baseExitDist;

  const dxExit = baseExitDist * w + extraAccelDist * w * w;
  const x = phase3EndX + dxExit;
  const distance = turnArcApprox + vCruise * 3.0 + dxExit;

  return {
    x,
    z: 0,
    yaw: 0,
    pitch: -0.014 * Math.sin(Math.PI * Math.min(1, w)),
    roll: 0,
    wheelAngle: -distance / wheelR,
    headlightIntensity: 1,
    revealIntensity: 1,
    trailOpacity: 1 - easeInOutSine(w),
    cameraBlend: 1,
  };
}
