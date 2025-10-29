import { declareComponent } from '@webflow/react';
import Squares from './squares';

const SquaresWebflow = declareComponent(Squares, {
    name: 'SquaresBackground',
    description: 'Animated squares background',
    group: 'Backgrounds',
    props: {},
});

export default SquaresWebflow;


