import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TimedRenderer } from '../components/TimedRenderer';

// === Setup ===
const StoryComponent = TimedRenderer; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/TimedRenderer', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const UsingDefaultInterval: Story = {
  name: 'Using Default Interval (5 Seconds)',
  args: {
    render: (time: number) => <>The time in milliseconds is {time}.</>,
  },
};

export const UsingCustomInterval: Story = {
  name: 'Using 1 Second Interval',
  args: {
    interval: 1000,
    render: (time: number) => <>The time in milliseconds is {time}.</>,
  },
};
