import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@kumiui/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithHint: Story = {
  args: { hint: 'We will never share your email.' },
};
export const WithError: Story = {
  args: { error: 'This field is required.' },
};
export const Disabled: Story = {
  args: { disabled: true, value: 'disabled@example.com' },
};