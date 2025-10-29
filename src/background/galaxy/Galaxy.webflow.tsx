import { declareComponent } from '@webflow/react';
import Galaxy from './galaxy';

const GalaxyWebflow = declareComponent(Galaxy, {
    name: 'GalaxyBackground',
    description: 'Galaxy shader background',
    group: 'Backgrounds',
    props: {},
});

export default GalaxyWebflow;
