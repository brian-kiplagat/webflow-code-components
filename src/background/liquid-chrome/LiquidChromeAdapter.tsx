import React from 'react';
import { LiquidChrome } from './liquid-chrome';

interface LiquidChromeAdapterProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: string; // Comma-separated RGB values, e.g., "0.1,0.1,0.1"
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
}

const LiquidChromeAdapter: React.FC<LiquidChromeAdapterProps> = ({
  baseColor,
  ...rest
}) => {
  // Parse comma-separated color string to array
  const baseColorArray: [number, number, number] = baseColor
    ? (baseColor.split(',').map(v => parseFloat(v.trim())) as [number, number, number])
    : [0.1, 0.1, 0.1];

  // Ensure we have exactly 3 values
  if (baseColorArray.length !== 3) {
    baseColorArray[0] = baseColorArray[0] ?? 0.1;
    baseColorArray[1] = baseColorArray[1] ?? 0.1;
    baseColorArray[2] = baseColorArray[2] ?? 0.1;
  }

  return (
    <LiquidChrome
      baseColor={baseColorArray}
      {...rest}
    />
  );
};

export default LiquidChromeAdapter;

