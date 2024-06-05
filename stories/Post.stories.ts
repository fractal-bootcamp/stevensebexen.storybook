import type { Meta, StoryObj } from '@storybook/react';

import { Post } from './Post';

const meta: Meta<typeof Post> = {
  title:'Steven/Post',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    timeStamp: {
      control: 'date'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Primary: Story = {
  args: {
    user: {
      name:'Red Dragon',
      avatarUrl: 'img/avatar1.webp',
      id: 1
    },
    timeStamp: new Date('May 1, 2024 03:24:00'),
    imgSrc: 'img/village.jpeg',
    description: 'Found a new place to burn. What do y\'all think?',
    groupName: 'Village Burners',
    numLikes: 191,
    numComments: 11
  }
}