import { declareComponent } from '@webflow/react';
import ColorBends from './color-bends';
import { props } from '@webflow/data-types';

const ColorBendsWebflow = declareComponent(ColorBends, {
    name: 'ColorBendsBackground',
    description: 'Color-bending shader background (three.js)',
    group: 'Backgrounds',
    props: {
        rotation: props.Number({ name: 'Rotation (deg)', defaultValue: 45, min: -180, max: 180, decimals: 0 }),
        speed: props.Number({ name: 'Speed', defaultValue: 0.2, min: 0, max: 5, decimals: 2 }),
        transparent: props.Boolean({ name: 'Transparent', defaultValue: true }),
        autoRotate: props.Number({ name: 'Auto Rotate (deg/s)', defaultValue: 0, min: -180, max: 180, decimals: 1 }),
        scale: props.Number({ name: 'Scale', defaultValue: 1, min: 0.01, max: 5, decimals: 2 }),
        frequency: props.Number({ name: 'Frequency', defaultValue: 1, min: 0.1, max: 10, decimals: 2 }),
        warpStrength: props.Number({ name: 'Warp Strength', defaultValue: 1, min: 0, max: 2, decimals: 2 }),
        mouseInfluence: props.Number({ name: 'Mouse Influence', defaultValue: 1, min: 0, max: 5, decimals: 2 }),
        parallax: props.Number({ name: 'Parallax', defaultValue: 0.5, min: 0, max: 2, decimals: 2 }),
        noise: props.Number({ name: 'Noise', defaultValue: 0.1, min: 0, max: 1, decimals: 2 }),
        colors: props.Text({ name: 'Colors (comma separated hex)', defaultValue: '' }),
    },
});

export default ColorBendsWebflow;
