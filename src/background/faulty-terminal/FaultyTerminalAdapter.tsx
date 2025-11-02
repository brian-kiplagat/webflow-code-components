import React from 'react';
import FaultyTerminal from './faulty-terminal';

interface FaultyTerminalAdapterProps extends React.HTMLAttributes<HTMLDivElement> {
  scale?: number;
  gridMul?: string; // Comma-separated values, e.g., "2,1"
  digitSize?: number;
  timeScale?: number;
  pause?: boolean;
  scanlineIntensity?: number;
  glitchAmount?: number;
  flickerAmount?: number;
  noiseAmp?: number;
  chromaticAberration?: number;
  dither?: number | boolean;
  curvature?: number;
  tint?: string;
  mouseReact?: boolean;
  mouseStrength?: number;
  dpr?: number;
  pageLoadAnimation?: boolean;
  brightness?: number;
}

const FaultyTerminalAdapter: React.FC<FaultyTerminalAdapterProps> = ({
  gridMul,
  ...rest
}) => {
  // Parse comma-separated gridMul string to array
  const gridMulArray: [number, number] = gridMul
    ? (gridMul.split(',').map(v => parseFloat(v.trim())) as [number, number])
    : [2, 1];

  // Ensure we have exactly 2 values
  if (gridMulArray.length !== 2) {
    gridMulArray[0] = gridMulArray[0] ?? 2;
    gridMulArray[1] = gridMulArray[1] ?? 1;
  }

  return (
    <FaultyTerminal
      gridMul={gridMulArray}
      {...rest}
    />
  );
};

export default FaultyTerminalAdapter;

