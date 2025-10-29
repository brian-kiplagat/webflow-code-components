import { declareComponent } from '@webflow/react';
import LetterGlitch from './letter-glitch';
import { props } from '@webflow/data-types';

const LetterGlitchWebflow = declareComponent(LetterGlitch, {
    name: 'LetterGlitchBackground',
    description: 'Letter glitch background',
    group: 'Backgrounds',
    props: {
        glitchColors: props.Text({
            name: 'Glitch Colors',
            defaultValue: '#2b4539,#61dca3,#61b3dc',
        }),
        glitchSpeed: props.Number({
            name: 'Glitch Speed',
            defaultValue: 50,
        }),
        centerVignette: props.Boolean({
            name: 'Center Vignette',
            defaultValue: false,
        }),
        outerVignette: props.Boolean({
            name: 'Outer Vignette',
            defaultValue: true,
        }),
        smooth: props.Boolean({
            name: 'Smooth',
            defaultValue: true,
        }),
        characters: props.Text({
            name: 'Characters',
            defaultValue: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
        }),
    },
});

export default LetterGlitchWebflow;


