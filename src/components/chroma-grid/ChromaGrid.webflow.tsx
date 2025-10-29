import { declareComponent } from '@webflow/react';
import ChromaGrid from './chroma-grid';
import { props } from '@webflow/data-types';

const ChromaGridWebflow = declareComponent(ChromaGrid, {
    name: 'ChromaGrid',
    description: 'Interactive grid with gradient border effects',
    group: 'Brians components',
    props: {
        radius: props.Number({
            name: "Radius",
            defaultValue: 300,
            min: 100,
            max: 500,
            decimals: 0,
        }),
        columns: props.Number({
            name: "Columns",
            defaultValue: 3,
            min: 1,
            max: 6,
            decimals: 0,
        }),
        rows: props.Number({
            name: "Rows",
            defaultValue: 2,
            min: 1,
            max: 4,
            decimals: 0,
        }),
        damping: props.Number({
            name: "Damping",
            defaultValue: 0.45,
            min: 0.1,
            max: 1,
            decimals: 2,
        }),
        fadeOut: props.Number({
            name: "Fade Out",
            defaultValue: 0.6,
            min: 0.1,
            max: 2,
            decimals: 1,
        }),
        ease: props.Text({
            name: "Ease",
            defaultValue: "power3.out",
        }),
    },
});

export default ChromaGridWebflow;

