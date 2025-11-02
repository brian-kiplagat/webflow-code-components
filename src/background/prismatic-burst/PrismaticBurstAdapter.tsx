import React from 'react';
import PrismaticBurst from './prismatic-burst';

interface PrismaticBurstAdapterProps {
  intensity?: number;
  speed?: number;
  animationType?: 'rotate' | 'rotate3d' | 'hover';
  colors?: string; // Comma-separated hex colors, e.g., "#ff0000,#00ff00"
  distort?: number;
  paused?: boolean;
  offset?: string; // Comma-separated values, e.g., "0,0"
  hoverDampness?: number;
  rayCount?: number;
  mixBlendMode?: React.CSSProperties['mixBlendMode'] | 'none';
}

const PrismaticBurstAdapter: React.FC<PrismaticBurstAdapterProps> = ({
  colors,
  offset,
  ...rest
}) => {
  // Parse comma-separated colors string to array
  const colorsArray: string[] = colors
    ? colors.split(',').map(c => c.trim()).filter(Boolean)
    : undefined;

  // Parse comma-separated offset string to object
  const offsetObj = offset
    ? (() => {
        const parts = offset.split(',').map(v => v.trim());
        return { x: parts[0] || 0, y: parts[1] || 0 };
      })()
    : undefined;

  return (
    <PrismaticBurst
      colors={colorsArray}
      offset={offsetObj}
      {...rest}
    />
  );
};

export default PrismaticBurstAdapter;

