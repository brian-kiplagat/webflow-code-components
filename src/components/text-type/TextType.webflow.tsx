import { declareComponent } from '@webflow/react';
import TextType from './text-type';
import { props } from '@webflow/data-types';

const TextTypeWebflow = declareComponent(TextType, {
    name: 'TextType',
    description: 'Typing animation effect with multiple text options',
    group: 'Brians components',
    props: {
        text: props.Text({
            name: "Text Array",
            defaultValue: "Text typing effect,for your websites,Happy coding!",
        }),
        typingSpeed: props.Number({
            name: "Typing Speed",
            defaultValue: 50,
            min: 10,
            max: 200,
            decimals: 0,
        }),
        pauseDuration: props.Number({
            name: "Pause Duration",
            defaultValue: 2000,
            min: 100,
            max: 5000,
            decimals: 0,
        }),
        showCursor: props.Boolean({
            name: "Show Cursor",
            defaultValue: true,
        }),
        cursorCharacter: props.Text({
            name: "Cursor Character",
            defaultValue: "|",
        }),
    },
});

export default TextTypeWebflow;

