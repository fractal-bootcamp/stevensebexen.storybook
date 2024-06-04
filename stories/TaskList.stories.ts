import type { Meta, StoryObj } from '@storybook/react';

import { TaskProps } from './Task';
import { TaskList } from './TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'Example/TaskList',
  component: TaskList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TaskList>;

const dummyTaskList: Array<TaskProps> = [
  {
    name: 'Eggs',
    description: 'Buy them.',
    isCompleted: false
  },
  {
    name: 'Milk',
    description: 'Drink it.',
    isCompleted: true
  },
  {
    name: 'Bread',
    description: 'Get this.',
    isCompleted: false
  }
]

export const Primary: Story = {
  args: {
    tasks: dummyTaskList,
    width: 300
  }
}