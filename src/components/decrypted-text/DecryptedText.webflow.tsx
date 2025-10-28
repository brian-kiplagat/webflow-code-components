import { declareComponent } from '@webflow/react';
import DecryptedText from './decrypted-text';
import { props } from '@webflow/data-types';

const DecryptedTextWebflow = declareComponent(DecryptedText, {
    name: 'DecryptedText',
    description: 'Text that reveals with decryption animation on hover or view',
    group: 'Brians components',
    props: {
        text: props.Text({
            name: "Text",
            defaultValue: "Hover me!",
        }),
        speed: props.Number({
            name: "Speed",
            defaultValue: 50,
            min: 10,
            max: 500,
            decimals: 0,
        }),
        maxIterations: props.Number({
            name: "Max Iterations",
            defaultValue: 10,
            min: 1,
            max: 50,
            decimals: 0,
        }),
        animateOn: props.Text({
            name: "Animate On",
            defaultValue: "hover",
        }),
        revealDirection: props.Text({
            name: "Reveal Direction",
            defaultValue: "start",
        }),
        className: props.Text({
            name: "Custom Class",
            defaultValue: "",
        }),
    },
});

export default DecryptedTextWebflow;

