import { declareComponent } from '@webflow/react';
import GradientBlindsAdapter from './GradientBlindsAdapter';
import { props } from '@webflow/data-types';

const GradientBlindsWebflow = declareComponent(GradientBlindsAdapter, {
    name: 'GradientBlindsBackground',
    description: 'Gradient blinds background',
    group: 'Backgrounds',
    props: {
        paused: props.Boolean({
            name: 'Paused',
            defaultValue: false,
        }),
        gradientColors: props.Text({
            name: 'Gradient Colors (comma-separated hex)',
            defaultValue: '#FF9FFC,#5227FF',
        }),
        angle: props.Number({
            name: 'Angle',
            defaultValue: 0,
            min: -180,
            max: 180,
            decimals: 0,
        }),
        noise: props.Number({
            name: 'Noise',
            defaultValue: 0.3,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        blindCount: props.Number({
            name: 'Blind Count',
            defaultValue: 16,
            min: 4,
            max: 64,
            decimals: 0,
        }),
        blindMinWidth: props.Number({
            name: 'Blind Min Width',
            defaultValue: 60,
            min: 20,
            max: 200,
            decimals: 0,
        }),
        mouseDampening: props.Number({
            name: 'Mouse Dampening',
            defaultValue: 0.15,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        mirrorGradient: props.Boolean({
            name: 'Mirror Gradient',
            defaultValue: false,
        }),
        spotlightRadius: props.Number({
            name: 'Spotlight Radius',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        spotlightSoftness: props.Number({
            name: 'Spotlight Softness',
            defaultValue: 1,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        spotlightOpacity: props.Number({
            name: 'Spotlight Opacity',
            defaultValue: 1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        distortAmount: props.Number({
            name: 'Distort Amount',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        shineDirection: props.Text({
            name: 'Shine Direction',
            defaultValue: 'left',
        }),
        mixBlendMode: props.Text({
            name: 'Mix Blend Mode',
            defaultValue: 'lighten',
        }),
    },
});

export default GradientBlindsWebflow;
