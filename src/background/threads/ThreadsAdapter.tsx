import React from 'react';
import Threads from './threads';

interface ThreadsAdapterProps {
  color?: string; // Comma-separated RGB values, e.g., "1,1,1"
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const ThreadsAdapter: React.FC<ThreadsAdapterProps> = ({
  color,
  ...rest
}) => {
  // Parse comma-separated color string to array
  const colorArray: [number, number, number] = color
    ? (color.split(',').map(v => parseFloat(v.trim())) as [number, number, number])
    : undefined;

  // Ensure we have exactly 3 values if provided
  if (color && colorArray.length !== 3) {
    colorArray[0] = colorArray[0] ?? 1;
    colorArray[1] = colorArray[1] ?? 1;
    colorArray[2] = colorArray[2] ?? 1;
  }

  return (
    <Threads
      color={colorArray}
      {...rest}
    />
  );
};

export default ThreadsAdapter;

