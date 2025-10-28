import { declareComponent } from '@webflow/react';
import CircularGallery from './circular-gallery';
import { props } from '@webflow/data-types';

const CircularGalleryWebflow = declareComponent(CircularGallery, {
    name: 'CircularGallery',
    description: '3D circular gallery with curved scroll effect',
    group: 'Brians components',
    props: {
        bend: props.Number({
            name: "Bend",
            defaultValue: 3,
            min: 0,
            max: 10,
            decimals: 1,
        }),
        textColor: props.Text({
            name: "Text Color",
            defaultValue: "#ffffff",
        }),
        borderRadius: props.Number({
            name: "Border Radius",
            defaultValue: 0.05,
            min: 0,
            max: 0.5,
            decimals: 2,
        }),
        scrollEase: props.Number({
            name: "Scroll Ease",
            defaultValue: 0.05,
            min: 0.01,
            max: 0.5,
            decimals: 2,
        }),
        scrollSpeed: props.Number({
            name: "Scroll Speed",
            defaultValue: 2,
            min: 0.5,
            max: 10,
            decimals: 1,
        }),
    },
});

export default CircularGalleryWebflow;

