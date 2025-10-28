import { declareComponent } from '@webflow/react';
import GradientText from './gradient-text';
import { props } from '@webflow/data-types';

const GradientTextWebflow = declareComponent(GradientText, {
    name: 'GradientText',
    description: 'Animated gradient text with customizable colors',
    group: 'Brians components',
    props: {
        children: props.Slot({
            name: "Text Content",
        }),
        colors: props.Text({
            name: "Colors",
            defaultValue: "#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa",
        }),
        animationSpeed: props.Number({
            name: "Animation Speed",
            defaultValue: 8,
            min: 0.1,
            max: 20,
            decimals: 1,
        }),
        showBorder: props.Boolean({
            name: "Show Border",
            defaultValue: false,
        }),

    },
});

export default GradientTextWebflow;

