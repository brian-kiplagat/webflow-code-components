import { declareComponent } from '@webflow/react';
import DotGrid from './dot-grid';
import { props } from '@webflow/data-types';

const DotGridWebflow = declareComponent(DotGrid, {
    name: 'DotGridBackground',
    description: 'Dot grid background',
    group: 'Backgrounds',
    props: {
        dotSize: props.Number({
            name: 'Dot Size',
            defaultValue: 16,
            min: 4,
            max: 64,
            decimals: 0,
        }),
        gap: props.Number({
            name: 'Gap',
            defaultValue: 32,
            min: 8,
            max: 128,
            decimals: 0,
        }),
        baseColor: props.Text({
            name: 'Base Color',
            defaultValue: '#5227FF',
        }),
        activeColor: props.Text({
            name: 'Active Color',
            defaultValue: '#5227FF',
        }),
        proximity: props.Number({
            name: 'Proximity',
            defaultValue: 150,
            min: 50,
            max: 500,
            decimals: 0,
        }),
        speedTrigger: props.Number({
            name: 'Speed Trigger',
            defaultValue: 100,
            min: 0,
            max: 1000,
            decimals: 0,
        }),
        shockRadius: props.Number({
            name: 'Shock Radius',
            defaultValue: 250,
            min: 50,
            max: 500,
            decimals: 0,
        }),
        shockStrength: props.Number({
            name: 'Shock Strength',
            defaultValue: 5,
            min: 0,
            max: 20,
            decimals: 1,
        }),
        maxSpeed: props.Number({
            name: 'Max Speed',
            defaultValue: 5000,
            min: 1000,
            max: 10000,
            decimals: 0,
        }),
        resistance: props.Number({
            name: 'Resistance',
            defaultValue: 750,
            min: 100,
            max: 2000,
            decimals: 0,
        }),
        returnDuration: props.Number({
            name: 'Return Duration',
            defaultValue: 1.5,
            min: 0.1,
            max: 5,
            decimals: 1,
        }),
    },
});

export default DotGridWebflow;
