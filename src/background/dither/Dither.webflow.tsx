import { declareComponent } from '@webflow/react';
import Dither from './dither';

const DitherWebflow = declareComponent(Dither, {
    name: 'DitherBackground',
    description: 'Dither shader background',
    group: 'Backgrounds',
    props: {},
});

export default DitherWebflow;
