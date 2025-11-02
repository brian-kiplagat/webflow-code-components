import { declareComponent } from '@webflow/react';
import PixelBlast from './pixel-blast';
import { props } from '@webflow/data-types';

const PixelBlastWebflow = declareComponent(PixelBlast, {
    name: 'PixelBlastBackground',
    description: 'Pixel blast reactive background',
    group: 'Backgrounds',
    props: {
        variant: props.Text({
            name: 'Variant',
            defaultValue: 'square',
        }),
        pixelSize: props.Number({
            name: 'Pixel Size',
            defaultValue: 10,
            min: 1,
            max: 50,
            decimals: 0,
        }),
        color: props.Text({
            name: 'Color',
            defaultValue: '#ffffff',
        }),
        antialias: props.Boolean({
            name: 'Antialias',
            defaultValue: true,
        }),
        patternScale: props.Number({
            name: 'Pattern Scale',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        patternDensity: props.Number({
            name: 'Pattern Density',
            defaultValue: 1,
            min: 0.1,
            max: 5,
            decimals: 2,
        }),
        liquid: props.Boolean({
            name: 'Liquid',
            defaultValue: false,
        }),
        liquidStrength: props.Number({
            name: 'Liquid Strength',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        liquidRadius: props.Number({
            name: 'Liquid Radius',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        pixelSizeJitter: props.Number({
            name: 'Pixel Size Jitter',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        enableRipples: props.Boolean({
            name: 'Enable Ripples',
            defaultValue: false,
        }),
        rippleIntensityScale: props.Number({
            name: 'Ripple Intensity Scale',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        rippleThickness: props.Number({
            name: 'Ripple Thickness',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        rippleSpeed: props.Number({
            name: 'Ripple Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        liquidWobbleSpeed: props.Number({
            name: 'Liquid Wobble Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        autoPauseOffscreen: props.Boolean({
            name: 'Auto Pause Offscreen',
            defaultValue: false,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        transparent: props.Boolean({
            name: 'Transparent',
            defaultValue: false,
        }),
        edgeFade: props.Number({
            name: 'Edge Fade',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        noiseAmount: props.Number({
            name: 'Noise Amount',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
    },
});

export default PixelBlastWebflow;


