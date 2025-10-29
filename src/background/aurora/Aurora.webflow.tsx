import { declareComponent } from '@webflow/react';
import Aurora from './aurora';
import { props } from '@webflow/data-types';

const AuroraWebflow = declareComponent(Aurora, {
    name: 'AuroraBackground',
    description: 'Aurora shader background (ogl)',
    group: 'Backgrounds',
    props: {
        amplitude: props.Number({
            name: 'Amplitude',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        blend: props.Number({
            name: 'Blend',
            defaultValue: 0.5,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        time: props.Number({
            name: 'Time Offset',
            defaultValue: 0,
            min: 0,
            max: 1000,
            decimals: 0,
        }),
    },
});

export default AuroraWebflow;
