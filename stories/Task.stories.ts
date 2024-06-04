import type { Meta, StoryObj } from '@storybook/react';

import { Task } from './Task';

const meta: Meta<typeof Task> = {
  title: 'Example/Task',
  component: Task,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Primary: Story = {
  args: {
    name: 'Name',
    description: 'Description',
    isCompleted: false
  }
}