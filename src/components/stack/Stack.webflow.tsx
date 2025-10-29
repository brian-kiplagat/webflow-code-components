import { declareComponent } from '@webflow/react';
import Stack from './stack';
import { props } from '@webflow/data-types';

const StackWebflow = declareComponent(Stack, {
    name: 'Stack',
    description: 'Draggable card stack with 3D rotation effects',
    group: 'Brians components',
    props: {
        randomRotation: props.Boolean({
            name: "Random Rotation",
            defaultValue: true,
        }),
        sensitivity: props.Number({
            name: "Sensitivity",
            defaultValue: 180,
            min: 50,
            max: 500,
            decimals: 0,
        }),
        sendToBackOnClick: props.Boolean({
            name: "Send To Back On Click",
            defaultValue: false,
        }),
    },
});

export default StackWebflow;

