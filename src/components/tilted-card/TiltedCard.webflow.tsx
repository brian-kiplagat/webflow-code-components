import { declareComponent } from '@webflow/react';
import TiltedCard from './tilted-card';
import { props } from '@webflow/data-types';

const TiltedCardWebflow = declareComponent(TiltedCard, {
    name: 'TiltedCard',
    description: '3D tilted card with mouse interaction and tooltip',
    group: 'Brians components',
    props: {
        imageSrc: props.Image({
            name: "Image",
            required: true,
        }),
        altText: props.Text({
            name: "Alt Text",
            defaultValue: "Tilted card image",
        }),
        captionText: props.Text({
            name: "Caption Text",
            defaultValue: "",
        }),
        scaleOnHover: props.Number({
            name: "Scale On Hover",
            defaultValue: 1.1,
            min: 1,
            max: 2,
            decimals: 2,
        }),
        rotateAmplitude: props.Number({
            name: "Rotate Amplitude",
            defaultValue: 14,
            min: 0,
            max: 45,
            decimals: 0,
        }),
        showMobileWarning: props.Boolean({
            name: "Show Mobile Warning",
            defaultValue: true,
        }),
        showTooltip: props.Boolean({
            name: "Show Tooltip",
            defaultValue: true,
        }),
        containerHeight: props.Text({
            name: "Container Height",
            defaultValue: "300px",
        }),
        containerWidth: props.Text({
            name: "Container Width",
            defaultValue: "100%",
        }),
    },
});

export default TiltedCardWebflow;

