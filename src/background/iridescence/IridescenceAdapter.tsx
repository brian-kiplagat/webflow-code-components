import React from 'react';
import Iridescence from './iridescence';

interface IridescenceAdapterProps {
  color?: string; // Comma-separated RGB values, e.g., "1,1,1"
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

const IridescenceAdapter: React.FC<IridescenceAdapterProps> = ({
  color,
  speed,
  amplitude,
  mouseReact,
  ...rest
}) => {
  // Parse comma-separated color string to array
  const colorArray: [number, number, number] = color
    ? (color.split(',').map(v => parseFloat(v.trim())) as [number, number, number])
    : [1, 1, 1];

  // Ensure we have exactly 3 values
  if (colorArray.length !== 3) {
    colorArray[0] = colorArray[0] ?? 1;
    colorArray[1] = colorArray[1] ?? 1;
    colorArray[2] = colorArray[2] ?? 1;
  }

  return (
    <Iridescence
      color={colorArray}
      speed={speed}
      amplitude={amplitude}
      mouseReact={mouseReact}
      {...rest}
    />
  );
};

export default IridescenceAdapter;

