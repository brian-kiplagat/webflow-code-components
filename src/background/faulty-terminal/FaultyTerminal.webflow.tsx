import { declareComponent } from '@webflow/react';
import FaultyTerminal from './faulty-terminal';

const FaultyTerminalWebflow = declareComponent(FaultyTerminal, {
    name: 'FaultyTerminalBackground',
    description: 'Glitchy terminal background',
    group: 'Backgrounds',
    props: {},
});

export default FaultyTerminalWebflow;
