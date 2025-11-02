import { declareComponent } from '@webflow/react';
import DarkVeil from './dark-veil';
import { props } from '@webflow/data-types';

const DarkVeilWebflow = declareComponent(DarkVeil, {
    name: 'DarkVeilBackground',
    description: 'Dark veil background',
    group: 'Backgrounds',
    props: {
        hueShift: props.Number({
            name: 'Hue Shift',
            defaultValue: 0,
            min: -180,
            max: 180,
            decimals: 0,
        }),
        noiseIntensity: props.Number({
            name: 'Noise Intensity',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        scanlineIntensity: props.Number({
            name: 'Scanline Intensity',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 0.5,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        scanlineFrequency: props.Number({
            name: 'Scanline Frequency',
            defaultValue: 0,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        warpAmount: props.Number({
            name: 'Warp Amount',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        resolutionScale: props.Number({
            name: 'Resolution Scale',
            defaultValue: 1,
            min: 0.1,
            max: 2,
            decimals: 2,
        }),
    },
});

export default DarkVeilWebflow;


