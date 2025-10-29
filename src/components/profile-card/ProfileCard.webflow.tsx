import { declareComponent } from '@webflow/react';
import ProfileCard from './profile-card';
import { props } from '@webflow/data-types';

const ProfileCardWebflow = declareComponent(ProfileCard, {
    name: 'ProfileCard',
    description: 'Interactive profile card with gradient effects',
    group: 'Brians components',
    props: {
        avatarUrl: props.Text({
            name: "Avatar URL",
            defaultValue: "https://placehold.co/600x400",
        }),
        name: props.Text({
            name: "Name",
            defaultValue: "",
        }),
        title: props.Text({
            name: "Title",
            defaultValue: "",
        }),
        handle: props.Text({
            name: "Handle",
            defaultValue: "",
        }),
        status: props.Text({
            name: "Status",
            defaultValue: "",
        }),
        enableTilt: props.Boolean({
            name: "Enable Tilt",
            defaultValue: true,
        }),
        showUserInfo: props.Boolean({
            name: "Show User Info",
            defaultValue: true,
        }),
    },
});

export default ProfileCardWebflow;

