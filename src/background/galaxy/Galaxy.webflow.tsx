import { declareComponent } from '@webflow/react';
import GalaxyAdapter from './GalaxyAdapter';
import { props } from '@webflow/data-types';

const GalaxyWebflow = declareComponent(GalaxyAdapter, {
    name: 'GalaxyBackground',
    description: 'Galaxy shader background',
    group: 'Backgrounds',
    props: {
        focal: props.Text({
            name: 'Focal Point (comma-separated)',
            defaultValue: '0.5,0.5',
        }),
        rotation: props.Text({
            name: 'Rotation (comma-separated)',
            defaultValue: '1.0,0.0',
        }),
        starSpeed: props.Number({
            name: 'Star Speed',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        density: props.Number({
            name: 'Density',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        hueShift: props.Number({
            name: 'Hue Shift',
            defaultValue: 140,
            min: 0,
            max: 360,
            decimals: 0,
        }),
        disableAnimation: props.Boolean({
            name: 'Disable Animation',
            defaultValue: false,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1.0,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        mouseInteraction: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
        glowIntensity: props.Number({
            name: 'Glow Intensity',
            defaultValue: 0.3,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        saturation: props.Number({
            name: 'Saturation',
            defaultValue: 0.0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        mouseRepulsion: props.Boolean({
            name: 'Mouse Repulsion',
            defaultValue: true,
        }),
        twinkleIntensity: props.Number({
            name: 'Twinkle Intensity',
            defaultValue: 0.3,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        rotationSpeed: props.Number({
            name: 'Rotation Speed',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        repulsionStrength: props.Number({
            name: 'Repulsion Strength',
            defaultValue: 2,
            min: 0,
            max: 10,
            decimals: 2,
        }),
        autoCenterRepulsion: props.Number({
            name: 'Auto Center Repulsion',
            defaultValue: 0,
            min: 0,
            max: 10,
            decimals: 2,
        }),
        transparent: props.Boolean({
            name: 'Transparent',
            defaultValue: true,
        }),
    },
});

export default GalaxyWebflow;
