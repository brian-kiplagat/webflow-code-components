import { declareComponent } from '@webflow/react';
import Orb from './orb';
import { props } from '@webflow/data-types';

const OrbWebflow = declareComponent(Orb, {
    name: 'OrbBackground',
    description: 'Orb animated background',
    group: 'Backgrounds',
    props: {
        hue: props.Number({
            name: 'Hue',
            defaultValue: 0,
            min: 0,
            max: 360,
            decimals: 0,
        }),
        hoverIntensity: props.Number({
            name: 'Hover Intensity',
            defaultValue: 0.2,
            min: 0,
            max: 1,
            decimals: 2,
        }),
        rotateOnHover: props.Boolean({
            name: 'Rotate On Hover',
            defaultValue: true,
        }),
        forceHoverState: props.Boolean({
            name: 'Force Hover State',
            defaultValue: false,
        }),
    },
});

export default OrbWebflow;


