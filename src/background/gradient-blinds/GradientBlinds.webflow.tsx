import { declareComponent } from '@webflow/react';
import GradientBlinds from './gradient-blinds';

const GradientBlindsWebflow = declareComponent(GradientBlinds, {
    name: 'GradientBlindsBackground',
    description: 'Gradient blinds background',
    group: 'Backgrounds',
    props: {},
});

export default GradientBlindsWebflow;
