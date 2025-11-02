import React from 'react';
import GradientBlinds from './gradient-blinds';

interface GradientBlindsAdapterProps {
  className?: string;
  dpr?: number;
  paused?: boolean;
  gradientColors?: string; // Comma-separated hex colors, e.g., "#FF9FFC,#5227FF"
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: 'left' | 'right';
  mixBlendMode?: string;
}

const GradientBlindsAdapter: React.FC<GradientBlindsAdapterProps> = ({
  gradientColors,
  ...rest
}) => {
  // Parse comma-separated colors string to array
  const gradientColorsArray: string[] = gradientColors
    ? gradientColors.split(',').map(c => c.trim()).filter(Boolean)
    : undefined;

  return (
    <GradientBlinds
      gradientColors={gradientColorsArray}
      {...rest}
    />
  );
};

export default GradientBlindsAdapter;

