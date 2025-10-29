import { declareComponent } from '@webflow/react';
import MagicBento from './magic-bento';
import { props } from '@webflow/data-types';

const MagicBentoWebflow = declareComponent(MagicBento, {
    name: 'MagicBento',
    description: 'Interactive bento grid with particle effects and spotlight',
    group: 'Brians components',
    props: {
        textAutoHide: props.Boolean({
            name: "Text Auto Hide",
            defaultValue: true,
        }),
        enableStars: props.Boolean({
            name: "Enable Stars",
            defaultValue: true,
        }),
        enableSpotlight: props.Boolean({
            name: "Enable Spotlight",
            defaultValue: true,
        }),
        enableBorderGlow: props.Boolean({
            name: "Enable Border Glow",
            defaultValue: true,
        }),
        enableTilt: props.Boolean({
            name: "Enable Tilt",
            defaultValue: true,
        }),
        enableMagnetism: props.Boolean({
            name: "Enable Magnetism",
            defaultValue: true,
        }),
        clickEffect: props.Boolean({
            name: "Click Effect",
            defaultValue: true,
        }),
        spotlightRadius: props.Number({
            name: "Spotlight Radius",
            defaultValue: 300,
            min: 100,
            max: 500,
            decimals: 0,
        }),
        particleCount: props.Number({
            name: "Particle Count",
            defaultValue: 12,
            min: 1,
            max: 50,
            decimals: 0,
        }),
        glowColor: props.Text({
            name: "Glow Color",
            defaultValue: "132, 0, 255",
        }),
    },
});

export default MagicBentoWebflow;

