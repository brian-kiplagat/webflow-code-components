import { declareComponent } from '@webflow/react';
import CurvedLoop from './curved-loop';
import { props } from '@webflow/data-types';

const CurvedLoopWebflow = declareComponent(CurvedLoop, {
    name: 'CurvedLoop',
    description: 'A curved loop component',
    group: 'Brians components',
    props: {
        marqueeText: props.Text({
            name: "Marquee Text",
            defaultValue: "Hello, world!",
        }),
        speed: props.Number({
            name: "Speed",
            defaultValue: 2,
            min: 0.1,
            max: 10,
            decimals: 1,
        }),
        className: props.Text({
            name: "Class Name",
            defaultValue: "curved-loop",
        }),
        curveAmount: props.Number({
            name: "Curve Amount",
            defaultValue: 400,
            min: 0,
            max: 1000,
            decimals: 0,
        }),
        direction: props.Text({
            name: "Direction",
            defaultValue: "left",
        }),
        interactive: props.Boolean({
            name: "Interactive",
            defaultValue: true,
        }),
    },
    
});

export default CurvedLoopWebflow;