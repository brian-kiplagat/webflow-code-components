import { declareComponent } from '@webflow/react';
import GridDistortion from './grid-distortion';
import { props } from '@webflow/data-types';

const GridDistortionWebflow = declareComponent(GridDistortion, {
    name: 'GridDistortionBackground',
    description: 'Distorted grid background (three.js/shader)',
    group: 'Backgrounds',
    props: {
        grid: props.Number({ name: 'Grid', defaultValue: 15, min: 0, max: 50, decimals: 0 }),
        mouse: props.Number({ name: 'Mouse', defaultValue: 0.1, min: 0, max: 1, decimals: 2 }),
        strength: props.Number({ name: 'Strength', defaultValue: 0.15, min: 0, max: 1, decimals: 2 }),
        relaxation: props.Number({ name: 'Relaxation', defaultValue: 0.9, min: 0, max: 1, decimals: 2 }),
        imageSrc: props.Text({ name: 'Image Source', defaultValue: 'https://via.placeholder.com/150' })
    },
});

export default GridDistortionWebflow;
