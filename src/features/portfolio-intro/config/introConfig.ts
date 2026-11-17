export interface IntroTuningConfig {
  /** Total timeline duration in seconds */
  duration: number;
  /** Uniform scale multiplier for the procedural sedan (1.0 = 4.4 world units long) */
  carScale: number;
  /** Base length of the car mesh at carScale = 1.0 */
  baseCarLength: number;
  /** Target fraction of the stage width occupied by the car in side-profile (0.45 - 0.55) */
  targetWidthRatio: number;
  /** Cruise speed multiplier in world units/sec during Phase 3 */
  cruiseSpeed: number;
  /** Camera vertical field of view in degrees */
  cameraFov: number;
  /** Phase 1 front three-quarter camera offset & look target */
  cameraStart: {
    xOffset: number;
    y: number;
    zFactor: number;
    lookAt: [number, number, number];
  };
  /** Phase 3-4 locked side-profile camera height & look target */
  cameraSide: {
    y: number;
    lookAt: [number, number, number];
  };
  /** Wheel radius in local car units (must match sedan geometry) */
  wheelRadius: number;
  /** Portfolio design tokens */
  colors: {
    background: string;
    gold: string;
    lilac: string;
    bodyWhite: string;
    glassTint: string;
    headlightCore: string;
  };
}

export const INTRO_CONFIG: IntroTuningConfig = {
  duration: 5.0,
  carScale: 1.0,
  baseCarLength: 4.4,
  targetWidthRatio: 0.5,
  cruiseSpeed: 1.3,
  cameraFov: 26,
  cameraStart: {
    xOffset: -1.45,
    y: 0.78,
    zFactor: 0.84,
    lookAt: [-2.55, 0.4, -0.35],
  },
  cameraSide: {
    y: 0.72,
    lookAt: [0, 0.44, 0],
  },
  wheelRadius: 0.33,
  colors: {
    background: '#1b0a20',
    gold: '#eaaa00',
    lilac: '#8a4a8f',
    bodyWhite: '#f4eef7',
    glassTint: '#14081a',
    headlightCore: '#fff5d6',
  },
};
