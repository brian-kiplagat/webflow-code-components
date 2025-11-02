import React from 'react';
import Galaxy from './galaxy';

interface GalaxyAdapterProps {
  focal?: string; // Comma-separated values, e.g., "0.5,0.5"
  rotation?: string; // Comma-separated values, e.g., "1.0,0.0"
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
}

const GalaxyAdapter: React.FC<GalaxyAdapterProps> = ({
  focal,
  rotation,
  ...rest
}) => {
  // Parse comma-separated focal string to array
  const focalArray: [number, number] = focal
    ? (focal.split(',').map(v => parseFloat(v.trim())) as [number, number])
    : [0.5, 0.5];

  // Ensure we have exactly 2 values
  if (focalArray.length !== 2) {
    focalArray[0] = focalArray[0] ?? 0.5;
    focalArray[1] = focalArray[1] ?? 0.5;
  }

  // Parse comma-separated rotation string to array
  const rotationArray: [number, number] = rotation
    ? (rotation.split(',').map(v => parseFloat(v.trim())) as [number, number])
    : [1.0, 0.0];

  // Ensure we have exactly 2 values
  if (rotationArray.length !== 2) {
    rotationArray[0] = rotationArray[0] ?? 1.0;
    rotationArray[1] = rotationArray[1] ?? 0.0;
  }

  return (
    <Galaxy
      focal={focalArray}
      rotation={rotationArray}
      {...rest}
    />
  );
};

export default GalaxyAdapter;

