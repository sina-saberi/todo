import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar as Sr } from './Sidebar';

export default {
    title: 'organisms',
    component: Sr,
    argTypes: {

    },
} as ComponentMeta<typeof Sr>;
const Template: ComponentStory<typeof Sr> = (args) => <Sr {...args} />;

export const SideBar = Template.bind({});
SideBar.args = {
    
};
