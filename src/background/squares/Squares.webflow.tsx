import { declareComponent } from '@webflow/react';
import Squares from './squares';
import { props } from '@webflow/data-types';

const SquaresWebflow = declareComponent(Squares, {
    name: 'SquaresBackground',
    description: 'Animated squares background',
    group: 'Backgrounds',
    props: {
        direction: props.Text({
            name: 'Direction',
            defaultValue: 'right',
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        borderColor: props.Text({
            name: 'Border Color',
            defaultValue: '#999',
        }),
        squareSize: props.Number({
            name: 'Square Size',
            defaultValue: 40,
            min: 10,
            max: 200,
            decimals: 0,
        }),
        hoverFillColor: props.Text({
            name: 'Hover Fill Color',
            defaultValue: '#222',
        }),
    },
});

export default SquaresWebflow;


