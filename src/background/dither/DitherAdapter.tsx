import React from 'react';
import Dither from './dither';

interface DitherAdapterProps {
    waveSpeed?: number;
    waveFrequency?: number;
    waveAmplitude?: number;
    waveColor?: string; // Comma-separated RGB values, e.g., "0.5,0.5,0.5"
    colorNum?: number;
    pixelSize?: number;
    disableAnimation?: boolean;
    enableMouseInteraction?: boolean;
    mouseRadius?: number;
}

const DitherAdapter: React.FC<DitherAdapterProps> = ({
    waveSpeed,
    waveFrequency,
    waveAmplitude,
    waveColor,
    colorNum,
    pixelSize,
    disableAnimation,
    enableMouseInteraction,
    mouseRadius,
}) => {
    // Parse comma-separated color string to array
    const waveColorArray: [number, number, number] = waveColor
        ? (waveColor.split(',').map(v => parseFloat(v.trim())) as [number, number, number])
        : [0.5, 0.5, 0.5];

    // Ensure we have exactly 3 values
    if (waveColorArray.length !== 3) {
        waveColorArray[0] = waveColorArray[0] ?? 0.5;
        waveColorArray[1] = waveColorArray[1] ?? 0.5;
        waveColorArray[2] = waveColorArray[2] ?? 0.5;
    }

    return (
        <Dither
            waveSpeed={waveSpeed}
            waveFrequency={waveFrequency}
            waveAmplitude={waveAmplitude}
            waveColor={waveColorArray}
            colorNum={colorNum}
            pixelSize={pixelSize}
            disableAnimation={disableAnimation}
            enableMouseInteraction={enableMouseInteraction}
            mouseRadius={mouseRadius}
        />
    );
};

export default DitherAdapter;

