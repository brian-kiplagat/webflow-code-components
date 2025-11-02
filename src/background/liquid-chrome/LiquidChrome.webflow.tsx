import { declareComponent } from '@webflow/react';
import LiquidChromeAdapter from './LiquidChromeAdapter';
import { props } from '@webflow/data-types';

const LiquidChromeWebflow = declareComponent(LiquidChromeAdapter, {
    name: 'LiquidChromeBackground',
    description: 'Liquid chrome background',
    group: 'Backgrounds',
    props: {
        baseColor: props.Text({
            name: 'Base Color (RGB, comma-separated)',
            defaultValue: '0.1,0.1,0.1',
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 0.2,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        amplitude: props.Number({
            name: 'Amplitude',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        frequencyX: props.Number({
            name: 'Frequency X',
            defaultValue: 3,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        frequencyY: props.Number({
            name: 'Frequency Y',
            defaultValue: 2,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        interactive: props.Boolean({
            name: 'Interactive',
            defaultValue: true,
        }),
    },
});

export default LiquidChromeWebflow;


