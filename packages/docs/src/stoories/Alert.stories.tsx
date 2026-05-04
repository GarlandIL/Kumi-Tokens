import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@kumiui/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    title: { control: 'text' },
    children: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: {
    variant: 'info',
    title: 'Note',
    children: 'This is an informational message.',
    dismissible: false,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {};
export const Success: Story = {
  args: { variant: 'success', title: 'Success!', children: 'Operation completed.' },
};
export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning!', children: 'Check your input.' },
};
export const Error: Story = {
  args: { variant: 'error', title: 'Error!', children: 'Something went wrong.' },
};
export const Dismissible: Story = {
  args: {
    dismissible: true,
    title: 'Dismissible',
    children: 'You can close this alert.',
  },
};