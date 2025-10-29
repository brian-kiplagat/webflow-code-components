import { declareComponent } from '@webflow/react';
import LightRays from './light-rays';
import { props } from '@webflow/data-types';

const LightRaysWebflow = declareComponent(LightRays, {
    name: 'LightRaysBackground',
    description: 'Light rays background',
    group: 'Backgrounds',
    props: {
        raysOrigin: props.Text({ name: 'Rays Origin', defaultValue: 'top-center' }),
        raysColor: props.Text({ name: 'Rays Color', defaultValue: '#ff0000' }),
        raysSpeed: props.Number({ name: 'Rays Speed', defaultValue: 1 }),
        lightSpread: props.Number({ name: 'Light Spread', defaultValue: 1 }),
        rayLength: props.Number({ name: 'Ray Length', defaultValue: 2 }),
        pulsating: props.Boolean({ name: 'Pulsating', defaultValue: false }),
        fadeDistance: props.Number({ name: 'Fade Distance', defaultValue: 1.0 }),
        saturation: props.Number({ name: 'Saturation', defaultValue: 1.0 }),
        followMouse: props.Boolean({ name: 'Follow Mouse', defaultValue: true }),
        mouseInfluence: props.Number({ name: 'Mouse Influence', defaultValue: 0.1 }),
        noiseAmount: props.Number({ name: 'Noise Amount', defaultValue: 0.0 }),
        distortion: props.Number({ name: 'Distortion', defaultValue: 0.0 }),
        className: props.Text({ name: 'Class Name', defaultValue: 'light-rays' }),
    },
});

export default LightRaysWebflow;


