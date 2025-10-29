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
        className: props.Text({
            name: "Class Name",
            defaultValue: "text-type",
        }),
        hideCursorWhileTyping: props.Boolean({
            name: "Hide Cursor While Typing",
            defaultValue: false,
        }),
        cursorBlinkDuration: props.Number({
            name: "Cursor Blink Duration",
            defaultValue: 0.5,
        }),
        loop: props.Boolean({
            name: "Loop",
            defaultValue: true,
        }),
        initialDelay: props.Number({
            name: "Initial Delay",
            defaultValue: 0,
        }),
        deletingSpeed: props.Number({
            name: "Deleting Speed",
            defaultValue: 30,
        }),
        cursorClassName: props.Text({
            name: "Cursor Class Name",
            defaultValue: "text-type-cursor",
        }),
        startOnVisible: props.Boolean({
            name: "Start On Visible",
            defaultValue: false,
        }),
        reverseMode: props.Boolean({
            name: "Reverse Mode",
            defaultValue: false,
        }),
    },
    options: {
        applyTagSelectors: true
    },
});

export default TextTypeWebflow;

