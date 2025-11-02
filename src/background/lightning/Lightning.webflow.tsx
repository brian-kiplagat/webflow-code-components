import { declareComponent } from '@webflow/react';
import Lightning from './lightning';
import { props } from '@webflow/data-types';

const LightningWebflow = declareComponent(Lightning, {
    name: 'LightningBackground',
    description: 'Lightning energy background',
    group: 'Backgrounds',
    props: {
        hue: props.Number({
            name: 'Hue',
            defaultValue: 230,
            min: 0,
            max: 360,
            decimals: 0,
        }),
        xOffset: props.Number({
            name: 'X Offset',
            defaultValue: 0,
            min: -1,
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
        intensity: props.Number({
            name: 'Intensity',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        size: props.Number({
            name: 'Size',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
    },
});

export default LightningWebflow;


