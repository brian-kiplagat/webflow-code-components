import { declareComponent } from '@webflow/react';
import Waves from './waves';
import { props } from '@webflow/data-types';

const WavesWebflow = declareComponent(Waves, {
    name: 'WavesBackground',
    description: 'Waves animated background',
    group: 'Backgrounds',
    props: {
        lineColor: props.Text({
            name: 'Line Color',
            defaultValue: '#ffffff',
        }),
        backgroundColor: props.Text({
            name: 'Background Color',
            defaultValue: '#000000',
        }),
        waveSpeedX: props.Number({
            name: 'Wave Speed X',
            defaultValue: 0.01,
            min: 0,
            max: 0.1,
            decimals: 3,
        }),
        waveSpeedY: props.Number({
            name: 'Wave Speed Y',
            defaultValue: 0.01,
            min: 0,
            max: 0.1,
            decimals: 3,
        }),
        waveAmpX: props.Number({
            name: 'Wave Amplitude X',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        waveAmpY: props.Number({
            name: 'Wave Amplitude Y',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        xGap: props.Number({
            name: 'X Gap',
            defaultValue: 20,
            min: 5,
            max: 100,
            decimals: 0,
        }),
        yGap: props.Number({
            name: 'Y Gap',
            defaultValue: 20,
            min: 5,
            max: 100,
            decimals: 0,
        }),
        friction: props.Number({
            name: 'Friction',
            defaultValue: 0.9,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        tension: props.Number({
            name: 'Tension',
            defaultValue: 0.1,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        maxCursorMove: props.Number({
            name: 'Max Cursor Move',
            defaultValue: 50,
            min: 0,
            max: 200,
            decimals: 0,
        }),
    },
});

export default WavesWebflow;


