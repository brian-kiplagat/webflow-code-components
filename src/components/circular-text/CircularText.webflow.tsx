import { declareComponent } from '@webflow/react';
import CircularText from './circular-text';
import { props } from '@webflow/data-types';

const CircularTextWebflow = declareComponent(CircularText, {
    name: 'CircularText',
    description: 'Circular spinning text with interactive hover effects',
    group: 'Brians components',
    props: {
        text: props.Text({
            name: "Text",
            defaultValue: "REACT*BITS*COMPONENTS*",
        }),
        onHover: props.Text({
            name: "On Hover",
            defaultValue: "speedUp",
        }),
        spinDuration: props.Number({
            name: "Spin Duration",
            defaultValue: 20,
            min: 1,
            max: 60,
            decimals: 1,
        }),
        className: props.Text({
            name: "Custom Class",
            defaultValue: "",
        }),
    },
});

export default CircularTextWebflow;

