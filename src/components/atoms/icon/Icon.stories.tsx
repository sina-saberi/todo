import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon as In } from './Icon';

export default {
    title: 'atoms',
    component: In,
    argTypes: {

    },
} as ComponentMeta<typeof In>;
const Template: ComponentStory<typeof In> = (args) => <In {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: "eye",
    size: '3xl'
};
