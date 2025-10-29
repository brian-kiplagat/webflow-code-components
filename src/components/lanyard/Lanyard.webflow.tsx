import { declareComponent } from '@webflow/react';
import Lanyard from './lanyard';
import { props } from '@webflow/data-types';

const LanyardWebflow = declareComponent(Lanyard, {
    name: 'Lanyard',
    description: '3D physics-based lanyard card interaction',
    group: 'Brians components',
    props: {
        fov: props.Number({
            name: "FOV",
            defaultValue: 20,
            min: 10,
            max: 50,
            decimals: 0,
        }),
        transparent: props.Boolean({
            name: "Transparent",
            defaultValue: true,
        }),
    },
});

export default LanyardWebflow;

