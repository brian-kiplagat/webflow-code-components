import { declareComponent } from '@webflow/react';
import Plasma from './plasma';
import { props } from '@webflow/data-types';

const PlasmaWebflow = declareComponent(Plasma, {
    name: 'PlasmaBackground',
    description: 'Plasma shader background',
    group: 'Backgrounds',
    props: {
        color: props.Text({
            name: 'Color',
            defaultValue: '#ff5000',
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        direction: props.Text({
            name: 'Direction',
            defaultValue: 'forward',
        }),
        scale: props.Number({
            name: 'Scale',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        opacity: props.Number({
            name: 'Opacity',
            defaultValue: 1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        mouseInteractive: props.Boolean({
            name: 'Mouse Interactive',
            defaultValue: false,
        }),
    },
});

export default PlasmaWebflow;


