import { declareComponent } from '@webflow/react';
import Folder from './folder';
import { props } from '@webflow/data-types';

const FolderWebflow = declareComponent(Folder, {
    name: 'Folder',
    description: 'Animated folder with interactive papers',
    group: 'Brians components',
    props: {
        color: props.Text({
            name: "Color",
            defaultValue: "#5227FF",
        }),
        size: props.Number({
            name: "Size",
            defaultValue: 1,
            min: 0.5,
            max: 2,
            decimals: 2,
        }),
    },
});

export default FolderWebflow;

