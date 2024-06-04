import type { Meta, StoryObj } from '@storybook/react';

import { MessageThread } from './MessageThread';

const meta: Meta<typeof MessageThread> = {
  title: 'Example/MessageThread',
  component: MessageThread,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export default meta;

type Story = StoryObj<typeof MessageThread>;

export const Primary: Story = {
  args: {
    currentUserId: 1,
    width: 600,
    messageWidth: 475,
    messages: [
      {
        timestamp: new Date(100),
        sender: {
          id: 1,
          avatarUrl: 'img/avatar1.webp'
        },
        content: 'I am a placeholder dragon.',
      },
      {
        timestamp: new Date(98),
        sender: {
          id: 1,
          avatarUrl: 'img/avatar1.webp'
        },
        content: 'Hello there!',
      },
      {
        timestamp: new Date(102),
        sender: {
          id: 1,
          avatarUrl: 'img/avatar1.webp'
        },
        content: 'I am here to help test this system!',
      },
      {
        timestamp: new Date(105),
        sender: {
          id: 2,
          avatarUrl: 'img/avatar2.webp'
        },
        content: 'Party rockers in the',
      },
      {
        timestamp: new Date(108),
        sender: {
          id: 2,
          avatarUrl: 'img/avatar2.webp'
        },
        content: 'House tonight.'
      },
      {
        timestamp: new Date(94),
        sender: {
          id: 3,
          avatarUrl: 'img/avatar3.png'
        },
        content: 'According to all known laws of aviation, there\'s no way a bee should be able to fly. I don\'t actually have this memorized I really just need a long test message.'
      }
    ]
  }
}