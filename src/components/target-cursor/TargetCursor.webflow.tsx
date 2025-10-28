import { declareComponent } from '@webflow/react';
import TargetCursor from './target-cursor';
import { props } from '@webflow/data-types';

const TargetCursorWebflow = declareComponent(TargetCursor, {
    name: 'TargetCursor',
    description: 'A target cursor component',
    group: 'Brians components',
    props: {

        targetSelector: props.Text({
            name: "Target Selector",
            defaultValue: ".cursor-target",
        }),
        hideDefaultCursor: props.Boolean({
            name: "Hide Default Cursor",
            defaultValue: true,
        }),
        spinDuration: props.Number({
            name: "Spin Duration",
            defaultValue: 2,
            min: 0.1,
            max: 10,
            decimals: 1,
        }),
    },
});

export default TargetCursorWebflow;