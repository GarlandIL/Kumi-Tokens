import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@kumiui/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'This is inside a card.',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};