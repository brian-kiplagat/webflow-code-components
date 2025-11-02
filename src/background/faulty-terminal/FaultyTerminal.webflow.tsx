import { declareComponent } from '@webflow/react';
import FaultyTerminalAdapter from './FaultyTerminalAdapter';
import { props } from '@webflow/data-types';

const FaultyTerminalWebflow = declareComponent(FaultyTerminalAdapter, {
    name: 'FaultyTerminalBackground',
    description: 'Glitchy terminal background',
    group: 'Backgrounds',
    props: {
        scale: props.Number({
            name: 'Scale',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        gridMul: props.Text({
            name: 'Grid Multiplier (comma-separated)',
            defaultValue: '2,1',
        }),
        digitSize: props.Number({
            name: 'Digit Size',
            defaultValue: 1.5,
            min: 0.5,
            max: 5,
            decimals: 2,
        }),
        timeScale: props.Number({
            name: 'Time Scale',
            defaultValue: 0.3,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        pause: props.Boolean({
            name: 'Pause',
            defaultValue: false,
        }),
        scanlineIntensity: props.Number({
            name: 'Scanline Intensity',
            defaultValue: 0.3,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        glitchAmount: props.Number({
            name: 'Glitch Amount',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        flickerAmount: props.Number({
            name: 'Flicker Amount',
            defaultValue: 1,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        noiseAmp: props.Number({
            name: 'Noise Amplitude',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        chromaticAberration: props.Number({
            name: 'Chromatic Aberration',
            defaultValue: 0,
            min: 0,
            max: 0.1,
            decimals: 3,
        }),
        dither: props.Number({
            name: 'Dither',
            defaultValue: 0,
            min: 0,
            max: 255,
            decimals: 0,
        }),
        curvature: props.Number({
            name: 'Curvature',
            defaultValue: 0.2,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        tint: props.Text({
            name: 'Tint Color',
            defaultValue: '#ffffff',
        }),
        mouseReact: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
        mouseStrength: props.Number({
            name: 'Mouse Strength',
            defaultValue: 0.2,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        dpr: props.Number({
            name: 'Device Pixel Ratio',
            defaultValue: 2,
            min: 1,
            max: 3,
            decimals: 0,
        }),
        pageLoadAnimation: props.Boolean({
            name: 'Page Load Animation',
            defaultValue: true,
        }),
        brightness: props.Number({
            name: 'Brightness',
            defaultValue: 1,
            min: 0,
            max: 2,
            decimals: 2,
        }),
    },
});

export default FaultyTerminalWebflow;
