import React from 'react';
import Prism from './prism';

interface PrismAdapterProps {
    height?: number;
    baseWidth?: number;
    animationType?: 'rotate' | 'hover' | '3drotate';
    glow?: number;
    offset?: string; // Comma-separated values, e.g., "0,0"
    noise?: number;
    transparent?: boolean;
    scale?: number;
    hueShift?: number;
    colorFrequency?: number;
    hoverStrength?: number;
    inertia?: number;
    bloom?: number;
    suspendWhenOffscreen?: boolean;
    timeScale?: number;
}

const PrismAdapter: React.FC<PrismAdapterProps> = ({
    offset,
    ...rest
}) => {
    // Parse comma-separated offset string to object
    const offsetObj = offset
        ? (() => {
            const parts = offset.split(',').map(v => parseFloat(v.trim()));
            return { x: parts[0] ?? 0, y: parts[1] ?? 0 };
        })()
        : { x: 0, y: 0 };

    return (
        <Prism
            offset={offsetObj}
            {...rest}
        />
    );
};

export default PrismAdapter;

