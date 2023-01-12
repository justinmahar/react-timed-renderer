/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimedRenderer } from '../components/TimedRenderer';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

export default {
  title: 'Stories/TimedRenderer',
  component: TimedRenderer,
} as ComponentMeta<typeof TimedRenderer>;

const Template: ComponentStory<typeof TimedRenderer> = (args) => <TimedRenderer {...args} />;

// The named exports define the stories
export const UsingDefaultInterval = Template.bind({});
UsingDefaultInterval.args = {
  render: (time: number) => <>The time in milliseconds is {time}.</>,
};
UsingDefaultInterval.story = {
  name: 'Using Default Interval (5 Seconds)',
};

export const UsingCustomInterval = Template.bind({});
UsingCustomInterval.args = {
  interval: 1000,
  render: (time: number) => <>The time in milliseconds is {time}.</>,
};
UsingCustomInterval.story = {
  name: 'Using 1 Second Interval',
};
