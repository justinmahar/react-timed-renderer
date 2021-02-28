import React from 'react';
import { TimedRenderer } from '../components/TimedRenderer';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'TimedRenderer',
  component: TimedRenderer,
};

// The named exports define the stories
export const UsingDefaultInterval = () => (
  <TimedRenderer render={(time) => <>The time in milliseconds is {time}. This will rerender in 5 seconds.</>} />
);
UsingDefaultInterval.story = {
  name: 'Using Default Interval (5 Seconds)',
};

export const UsingCustomInterval = () => (
  <TimedRenderer
    interval={1000}
    render={(time) => <>The time in milliseconds is {time}. This will rerender in 1 second.</>}
  />
);
UsingCustomInterval.story = {
  name: 'Using 1 Second Interval',
};
