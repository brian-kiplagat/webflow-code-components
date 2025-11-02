import { declareComponent } from '@webflow/react';
import ThreadsAdapter from './ThreadsAdapter';
import { props } from '@webflow/data-types';

const ThreadsWebflow = declareComponent(ThreadsAdapter, {
    name: 'ThreadsBackground',
    description: 'Threads line-field background',
    group: 'Backgrounds',
    props: {
        color: props.Text({
            name: 'Color (RGB, comma-separated)',
            defaultValue: '1,1,1',
        }),
        amplitude: props.Number({
            name: 'Amplitude',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        distance: props.Number({
            name: 'Distance',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        enableMouseInteraction: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
    },
});

export default ThreadsWebflow;


