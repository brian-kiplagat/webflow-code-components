import { declareComponent } from '@webflow/react';
import Beams from './beams';
import { props } from '@webflow/data-types';

const BeamsWebflow = declareComponent(Beams, {
    name: 'BeamsBackground',
    description: 'Three.js volumetric beams background',
    group: 'Backgrounds',
    props: {
        beamWidth: props.Number({ name: 'Beam Width', defaultValue: 2, min: 0.1, max: 10, decimals: 1 }),
        beamHeight: props.Number({ name: 'Beam Height', defaultValue: 15, min: 1, max: 50, decimals: 0 }),
        beamNumber: props.Number({ name: 'Beam Number', defaultValue: 12, min: 1, max: 50, decimals: 0 }),
        lightColor: props.Text({ name: 'Light Color', defaultValue: '#ffffff' }),
        speed: props.Number({ name: 'Speed', defaultValue: 2, min: 0, max: 10, decimals: 2 }),
        noiseIntensity: props.Number({ name: 'Noise Intensity', defaultValue: 1.75, min: 0, max: 5, decimals: 2 }),
        scale: props.Number({ name: 'Noise Scale', defaultValue: 0.2, min: 0.01, max: 2, decimals: 2 }),
        rotation: props.Number({ name: 'Rotation (deg)', defaultValue: 0, min: -180, max: 180, decimals: 0 }),
    },
});

export default BeamsWebflow;
