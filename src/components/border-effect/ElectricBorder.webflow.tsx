import { declareComponent } from '@webflow/react';
import ElectricBorder from './electric-border';
import { props } from '@webflow/data-types';

const ElectricBorderWebflow = declareComponent(ElectricBorder, {
    name: 'ElectricBorder',
    description: 'A glowing, animated border wrapper',
    group: 'Brians components',
    props: {
        children: props.Slot({
            name: "Content",
        }),
        color: props.Text({
            name: "Color",
            defaultValue: "#5227FF",
        }),
        speed: props.Number({
            name: "Speed",
            defaultValue: 1,
            min: 0.1,
            max: 10,
            decimals: 1,
        }),
        chaos: props.Number({
            name: "Chaos",
            defaultValue: 1,
            min: 0,
            max: 3,
            decimals: 1,
        }),
        thickness: props.Number({
            name: "Thickness",
            defaultValue: 2,
            min: 1,
            max: 20,
            decimals: 0,
        }),
    },
});

export default ElectricBorderWebflow;