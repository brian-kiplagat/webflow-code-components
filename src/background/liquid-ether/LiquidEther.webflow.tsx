import { declareComponent } from '@webflow/react';
import LiquidEtherAdapter from './LiquidEtherAdapter';
import { props } from '@webflow/data-types';

const LiquidEtherWebflow = declareComponent(LiquidEtherAdapter, {
    name: 'LiquidEtherBackground',
    description: 'Liquid ether background',
    group: 'Backgrounds',
    props: {
        mouseForce: props.Number({
            name: 'Mouse Force',
            defaultValue: 20,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        cursorSize: props.Number({
            name: 'Cursor Size',
            defaultValue: 100,
            min: 10,
            max: 500,
            decimals: 0,
        }),
        isViscous: props.Boolean({
            name: 'Is Viscous',
            defaultValue: false,
        }),
        viscous: props.Number({
            name: 'Viscous',
            defaultValue: 30,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        iterationsViscous: props.Number({
            name: 'Iterations Viscous',
            defaultValue: 32,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        iterationsPoisson: props.Number({
            name: 'Iterations Poisson',
            defaultValue: 32,
            min: 0,
            max: 100,
            decimals: 0,
        }),
        dt: props.Number({
            name: 'Delta Time',
            defaultValue: 0.014,
            min: 0.001,
            max: 0.1,
            decimals: 3,
        }),
        BFECC: props.Boolean({
            name: 'BFECC',
            defaultValue: true,
        }),
        resolution: props.Number({
            name: 'Resolution',
            defaultValue: 0.5,
            min: 0.1,
            max: 1,
            decimals: 2,
        }),
        isBounce: props.Boolean({
            name: 'Is Bounce',
            defaultValue: false,
        }),
        colors: props.Text({
            name: 'Colors (comma-separated hex)',
            defaultValue: '#5227FF,#FF9FFC,#B19EEF',
        }),
        autoDemo: props.Boolean({
            name: 'Auto Demo',
            defaultValue: true,
        }),
        autoSpeed: props.Number({
            name: 'Auto Speed',
            defaultValue: 0.5,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        autoIntensity: props.Number({
            name: 'Auto Intensity',
            defaultValue: 2.2,
            min: 0,
            max: 10,
            decimals: 2,
        }),
        takeoverDuration: props.Number({
            name: 'Takeover Duration',
            defaultValue: 0.25,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        autoResumeDelay: props.Number({
            name: 'Auto Resume Delay',
            defaultValue: 1000,
            min: 0,
            max: 5000,
            decimals: 0,
        }),
        autoRampDuration: props.Number({
            name: 'Auto Ramp Duration',
            defaultValue: 0.6,
            min: 0,
            max: 2,
            decimals: 2,
        }),
    },
});

export default LiquidEtherWebflow;


