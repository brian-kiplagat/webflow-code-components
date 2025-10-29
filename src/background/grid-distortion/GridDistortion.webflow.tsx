import { declareComponent } from '@webflow/react';
import GridDistortion from './grid-distortion';
import { props } from '@webflow/data-types';

const GridDistortionWebflow = declareComponent(GridDistortion, {
    name: 'GridDistortionBackground',
    description: 'Distorted grid background (three.js/shader)',
    group: 'Backgrounds',
    props: {
        speed: props.Number({ name: 'Speed', defaultValue: 1, min: 0, max: 5, decimals: 2 }),
        intensity: props.Number({ name: 'Intensity', defaultValue: 1, min: 0, max: 5, decimals: 2 }),
    },
});

export default GridDistortionWebflow;
