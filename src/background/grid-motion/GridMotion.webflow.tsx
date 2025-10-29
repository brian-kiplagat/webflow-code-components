import { declareComponent } from '@webflow/react';
import GridMotion from './grid-motion';
import { props } from '@webflow/data-types';

const GridMotionWebflow = declareComponent(GridMotion, {
    name: 'GridMotionBackground',
    description: 'Animated grid motion background',
    group: 'Backgrounds',
    props: {
        speed: props.Number({ name: 'Speed', defaultValue: 1, min: 0, max: 5, decimals: 2 }),
    },
});

export default GridMotionWebflow;
