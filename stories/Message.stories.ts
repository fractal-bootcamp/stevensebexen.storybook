import type { Meta, StoryObj } from '@storybook/react';

import { Message, MessagePosition } from './Message';

const meta: Meta<typeof Message> = {
  title: 'Example/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    messagePosition: {
      options: ['message-position--top', 'message-position--middle', 'message-position--bottom', 'message-position--island'],
      control: {type: 'inline-radio'}
    }
  }
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Primary: Story = {
  args: {
    timestamp: new Date(),
    sender: {
      id: 1,
      avatarUrl: 'img/avatar1.webp'
    },
    content: 'I am a placeholder dragon.',
    messagePosition: MessagePosition.Island,
    isCurrentUser: true,
    width: 400
  }
}