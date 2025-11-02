import React from 'react';
import LiquidEther from './liquid-ether';

interface LiquidEtherAdapterProps {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string; // Comma-separated hex colors, e.g., "#5227FF,#FF9FFC,#B19EEF"
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

const LiquidEtherAdapter: React.FC<LiquidEtherAdapterProps> = ({
  colors,
  ...rest
}) => {
  // Parse comma-separated colors string to array
  const colorsArray: string[] = colors
    ? colors.split(',').map(c => c.trim()).filter(Boolean)
    : undefined;

  return (
    <LiquidEther
      colors={colorsArray}
      {...rest}
    />
  );
};

export default LiquidEtherAdapter;

