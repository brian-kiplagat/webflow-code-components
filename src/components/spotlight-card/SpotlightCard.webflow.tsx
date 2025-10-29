import { declareComponent } from '@webflow/react';
import SpotlightCard from './spotlight-card';
import { props } from '@webflow/data-types';

const SpotlightCardWebflow = declareComponent(SpotlightCard, {
    name: 'SpotlightCard',
    description: 'Card with animated spotlight effect',
    group: 'Brians components',
    props: {
        children: props.Slot({
            name: "Content",
        }),
        spotlightColor: props.Text({
            name: "Spotlight Color",
            defaultValue: "rgba(255, 255, 255, 0.25)",
        }),
    },
});

export default SpotlightCardWebflow;

