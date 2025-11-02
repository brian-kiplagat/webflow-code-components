import { declareComponent } from '@webflow/react';
import DitherAdapter from './DitherAdapter';
import { props } from '@webflow/data-types';

const DitherWebflow = declareComponent(DitherAdapter, {
    name: 'DitherBackground',
    description: 'Dither shader background',
    group: 'Backgrounds',
    props: {
        waveSpeed: props.Number({
            name: 'Wave Speed',
            defaultValue: 0.05,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        waveFrequency: props.Number({
            name: 'Wave Frequency',
            defaultValue: 3,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        waveAmplitude: props.Number({
            name: 'Wave Amplitude',
            defaultValue: 0.3,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        waveColor: props.Text({
            name: 'Wave Color (RGB, comma-separated)',
            defaultValue: '0.5,0.5,0.5',
        }),
        colorNum: props.Number({
            name: 'Color Number',
            defaultValue: 4,
            min: 2,
            max: 256,
            decimals: 0,
        }),
        pixelSize: props.Number({
            name: 'Pixel Size',
            defaultValue: 2,
            min: 1,
            max: 10,
            decimals: 0,
        }),
        disableAnimation: props.Boolean({
            name: 'Disable Animation',
            defaultValue: false,
        }),
        enableMouseInteraction: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
        mouseRadius: props.Number({
            name: 'Mouse Radius',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
    },
});

export default DitherWebflow;
