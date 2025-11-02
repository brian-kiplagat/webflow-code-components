import { declareComponent } from '@webflow/react';
import Silk from './silk';
import { props } from '@webflow/data-types';

const SilkWebflow = declareComponent(Silk, {
    name: 'SilkBackground',
    description: 'Silk shader background',
    group: 'Backgrounds',
    props: {
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        scale: props.Number({
            name: 'Scale',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        color: props.Text({
            name: 'Color',
            defaultValue: '#ffffff',
        }),
        noiseIntensity: props.Number({
            name: 'Noise Intensity',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        rotation: props.Number({
            name: 'Rotation',
            defaultValue: 0,
            min: -180,
            max: 180,
            decimals: 0,
        }),
    },
});

export default SilkWebflow;


