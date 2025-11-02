import { declareComponent } from '@webflow/react';
import IridescenceAdapter from './IridescenceAdapter';
import { props } from '@webflow/data-types';

const IridescenceWebflow = declareComponent(IridescenceAdapter, {
    name: 'IridescenceBackground',
    description: 'Iridescent flowing background',
    group: 'Backgrounds',
    props: {
        color: props.Text({
            name: 'Color (RGB, comma-separated)',
            defaultValue: '1,1,1',
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1.0,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        amplitude: props.Number({
            name: 'Amplitude',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        mouseReact: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
    },
});

export default IridescenceWebflow;


