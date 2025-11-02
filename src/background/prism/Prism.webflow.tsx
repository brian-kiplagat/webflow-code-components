import { declareComponent } from '@webflow/react';
import PrismAdapter from './PrismAdapter';
import { props } from '@webflow/data-types';

const PrismWebflow = declareComponent(PrismAdapter, {
    name: 'PrismBackground',
    description: 'Prism 3D ray-marched background',
    group: 'Backgrounds',
    props: {
        height: props.Number({
            name: 'Height',
            defaultValue: 3.5,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        baseWidth: props.Number({
            name: 'Base Width',
            defaultValue: 5.5,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        animationType: props.Text({
            name: 'Animation Type',
            defaultValue: 'rotate',
        }),
        glow: props.Number({
            name: 'Glow',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        offset: props.Text({
            name: 'Offset (comma-separated x,y)',
            defaultValue: '0,0',
        }),
        noise: props.Number({
            name: 'Noise',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        transparent: props.Boolean({
            name: 'Transparent',
            defaultValue: true,
        }),
        scale: props.Number({
            name: 'Scale',
            defaultValue: 3.6,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        hueShift: props.Number({
            name: 'Hue Shift',
            defaultValue: 0,
            min: -180,
            max: 180,
            decimals: 0,
        }),
        colorFrequency: props.Number({
            name: 'Color Frequency',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        hoverStrength: props.Number({
            name: 'Hover Strength',
            defaultValue: 2,
            min: 0,
            max: 10,
            decimals: 2,
        }),
        inertia: props.Number({
            name: 'Inertia',
            defaultValue: 0.05,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        bloom: props.Number({
            name: 'Bloom',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        suspendWhenOffscreen: props.Boolean({
            name: 'Suspend When Offscreen',
            defaultValue: false,
        }),
        timeScale: props.Number({
            name: 'Time Scale',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
    },
});

export default PrismWebflow;


