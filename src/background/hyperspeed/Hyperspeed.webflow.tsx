import { declareComponent } from '@webflow/react';
import Hyperspeed from './hyperspeed';
import { props } from '@webflow/data-types';

const HyperspeedWebflow = declareComponent(Hyperspeed, {
    name: 'HyperspeedBackground',
    description: 'Starfield hyperspeed background',
    group: 'Backgrounds',
    props: {
        speed: props.Number({ name: 'Speed', defaultValue: 1, min: 0, max: 10, decimals: 2 }),
        density: props.Number({ name: 'Density', defaultValue: 1, min: 0.1, max: 5, decimals: 2 }),
    },
});

export default HyperspeedWebflow;
