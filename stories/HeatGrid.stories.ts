import type { Meta, StoryObj } from '@storybook/react';

import { HeatGrid } from './HeatGrid';

const meta: Meta<typeof HeatGrid> = {
  title: 'Steven/HeatGrid',
  component: HeatGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof HeatGrid>;

const dummyData = [
  1, 0.25, 1, 0, 0.5, 1, 0,
  0.5, 0, 0.75, 0.5, 0, 0.5, 0.75,
  0, 0.75, 0, 0.5, 0.75, 0.25, 0,
  0.5, 0.5, 0.75, 0, 1, 0.5, 1,
  1, 0, 1, 0.75, 0.5, 0, 0.75
];

export const Primary: Story = {
  args: {
    data: dummyData,
    colorMin: '#D9D9D9',
    colorMax: '#3E5FCC',
    numCols: 7,
    numRows: 5,
    rowLabels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    width: 480,
    height: 370
  }
}