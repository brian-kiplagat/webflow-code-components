import React from 'react';
import Particles from './particles';

interface ParticlesAdapterProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string; // Comma-separated hex colors, e.g., "#ffffff,#ffffff,#ffffff"
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

const ParticlesAdapter: React.FC<ParticlesAdapterProps> = ({
  particleColors,
  ...rest
}) => {
  // Parse comma-separated colors string to array
  const particleColorsArray: string[] = particleColors
    ? particleColors.split(',').map(c => c.trim()).filter(Boolean)
    : undefined;

  return (
    <Particles
      particleColors={particleColorsArray}
      {...rest}
    />
  );
};

export default ParticlesAdapter;

