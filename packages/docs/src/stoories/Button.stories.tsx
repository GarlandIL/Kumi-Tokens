import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@kumiui/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: { variant: 'secondary' },
};