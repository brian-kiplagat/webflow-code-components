import { declareComponent } from '@webflow/react';
import CardSwap from './card-swap';
import { props } from '@webflow/data-types';

const CardSwapWebflow = declareComponent(CardSwap, {
    name: 'CardSwap',
    description: 'Animated card swap component with 3D effects',
    group: 'Brians components',
    props: {
        children: props.Slot({
            name: "Cards",
        }),
        width: props.Text({
            name: "Width",
            defaultValue: "320",
        }),
        height: props.Text({
            name: "Height",
            defaultValue: "450",
        }),
        cardDistance: props.Number({
            name: "Card Distance",
            defaultValue: 20,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        delay: props.Number({
            name: "Delay",
            defaultValue: 1.5,
            min: 0.1,
            max: 5,
            decimals: 1,
        }),
        pauseOnHover: props.Boolean({
            name: "Pause On Hover",
            defaultValue: true,
        }),
        easing: props.Text({
            name: "Easing",
            defaultValue: "linear",
        }),
    },
});

export default CardSwapWebflow;

