import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as BTN } from './Button';

export default {
  title: 'atoms',
  component: BTN,
  argTypes: {

  },
} as ComponentMeta<typeof BTN>;
const Template: ComponentStory<typeof BTN> = (args) => <BTN {...args} />;

export const Button = Template.bind({});
Button.args = {
  size: 'md',
  children: "click"
};
