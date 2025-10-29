import { declareComponent } from '@webflow/react';
import DotGrid from './dot-grid';

const DotGridWebflow = declareComponent(DotGrid, {
    name: 'DotGridBackground',
    description: 'Dot grid background',
    group: 'Backgrounds',
    props: {},
});

export default DotGridWebflow;
