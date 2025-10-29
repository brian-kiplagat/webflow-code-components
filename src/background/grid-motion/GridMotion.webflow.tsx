import { declareComponent } from '@webflow/react';
import GridMotion from './grid-motion';
import { props } from '@webflow/data-types';

const GridMotionWebflow = declareComponent(GridMotion, {
    name: 'GridMotionBackground',
    description: 'Animated grid motion background',
    group: 'Backgrounds',
    props: {
        items: props.Text({ name: 'Items', defaultValue: 'Item 1,Item 2,Item 3,Item 4,Item 5,Item 6,Item 7,Item 8,Item 9,Item 10' }),
        gradientColor: props.Text({ name: 'Gradient Color', defaultValue: 'black' }),
    },
});

export default GridMotionWebflow;
