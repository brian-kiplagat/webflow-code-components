import { declareComponent } from '@webflow/react';
import ParticlesAdapter from './ParticlesAdapter';
import { props } from '@webflow/data-types';

const ParticlesWebflow = declareComponent(ParticlesAdapter, {
    name: 'ParticlesBackground',
    description: 'Particles background',
    group: 'Backgrounds',
    props: {
        particleCount: props.Number({
            name: 'Particle Count',
            defaultValue: 1000,
            min: 100,
            max: 10000,
            decimals: 0,
        }),
        particleSpread: props.Number({
            name: 'Particle Spread',
            defaultValue: 50,
            min: 10,
            max: 200,
            decimals: 0,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 0.5,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        particleColors: props.Text({
            name: 'Particle Colors (comma-separated hex)',
            defaultValue: '#ffffff,#ffffff,#ffffff',
        }),
        moveParticlesOnHover: props.Boolean({
            name: 'Move Particles On Hover',
            defaultValue: false,
        }),
        particleHoverFactor: props.Number({
            name: 'Particle Hover Factor',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        alphaParticles: props.Boolean({
            name: 'Alpha Particles',
            defaultValue: false,
        }),
        particleBaseSize: props.Number({
            name: 'Particle Base Size',
            defaultValue: 2,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        sizeRandomness: props.Number({
            name: 'Size Randomness',
            defaultValue: 0.5,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        cameraDistance: props.Number({
            name: 'Camera Distance',
            defaultValue: 100,
            min: 10,
            max: 500,
            decimals: 0,
        }),
        disableRotation: props.Boolean({
            name: 'Disable Rotation',
            defaultValue: false,
        }),
    },
});

export default ParticlesWebflow;


