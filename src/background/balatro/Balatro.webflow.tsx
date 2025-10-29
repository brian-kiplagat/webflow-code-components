import { declareComponent } from '@webflow/react';
import Balatro from './balatro';
import { props } from '@webflow/data-types';

const BalatroWebflow = declareComponent(Balatro, {
    name: 'BalatroBackground',
    description: 'Balatro animated background (ogl shader)',
    group: 'Backgrounds',
    props: {
        spinRotation: props.Number({
            name: 'Spin Rotation',
            defaultValue: -2,
            min: -10,
            max: 10,
            decimals: 2,
        }),
        spinSpeed: props.Number({
            name: 'Spin Speed',
            defaultValue: 7,
            min: 0,
            max: 20,
            decimals: 2,
        }),
        offsetX: props.Number({
            name: 'Offset X',
            defaultValue: 0,
            min: -1,
            max: 1,
            decimals: 2,
        }),
        offsetY: props.Number({
            name: 'Offset Y',
            defaultValue: 0,
            min: -1,
            max: 1,
            decimals: 2,
        }),
        color1: props.Text({
            name: 'Color 1',
            defaultValue: '#DE443B',
        }),
        color2: props.Text({
            name: 'Color 2',
            defaultValue: '#006BB4',
        }),
        color3: props.Text({
            name: 'Color 3',
            defaultValue: '#162325',
        }),
        contrast: props.Number({
            name: 'Contrast',
            defaultValue: 3.5,
            min: 0.1,
            max: 10,
            decimals: 2,
        }),
        lighting: props.Number({
            name: 'Lighting',
            defaultValue: 0.4,
            min: 0,
            max: 2,
            decimals: 2,
        }),
        spinAmount: props.Number({
            name: 'Spin Amount',
            defaultValue: 0.25,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        pixelFilter: props.Number({
            name: 'Pixel Filter',
            defaultValue: 745,
            min: 1,
            max: 2000,
            decimals: 0,
        }),
        spinEase: props.Number({
            name: 'Spin Ease',
            defaultValue: 1,
            min: 0,
            max: 5,
            decimals: 2,
        }),
        isRotate: props.Boolean({
            name: 'Rotate Animation',
            defaultValue: false,
        }),
        mouseInteraction: props.Boolean({
            name: 'Mouse Interaction',
            defaultValue: true,
        }),
    },
});

export default BalatroWebflow;
