import { declareComponent } from '@webflow/react';
import PrismaticBurstAdapter from './PrismaticBurstAdapter';
import { props } from '@webflow/data-types';

const PrismaticBurstWebflow = declareComponent(PrismaticBurstAdapter, {
    name: 'PrismaticBurstBackground',
    description: 'Prismatic burst background',
    group: 'Backgrounds',
    props: {
        intensity: props.Number({
            name: 'Intensity',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        speed: props.Number({
            name: 'Speed',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        animationType: props.Text({
            name: 'Animation Type',
            defaultValue: 'rotate',
        }),
        colors: props.Text({
            name: 'Colors (comma-separated hex)',
            defaultValue: '#ff0000,#00ff00,#0000ff',
        }),
        distort: props.Number({
            name: 'Distort',
            defaultValue: 0,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        paused: props.Boolean({
            name: 'Paused',
            defaultValue: false,
        }),
        offset: props.Text({
            name: 'Offset (comma-separated x,y)',
            defaultValue: '0,0',
        }),
        hoverDampness: props.Number({
            name: 'Hover Dampness',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        rayCount: props.Number({
            name: 'Ray Count',
            defaultValue: 12,
            min: 4,
            max: 32,
            decimals: 0,
        }),
        mixBlendMode: props.Text({
            name: 'Mix Blend Mode',
            defaultValue: 'none',
        }),
    },
});

export default PrismaticBurstWebflow;


