"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingCustomInterval = exports.UsingDefaultInterval = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const TimedRenderer_1 = require("../components/TimedRenderer");
// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.
exports.default = {
    title: 'Stories/TimedRenderer',
    component: TimedRenderer_1.TimedRenderer,
};
const Template = (args) => react_1.default.createElement(TimedRenderer_1.TimedRenderer, Object.assign({}, args));
// The named exports define the stories
exports.UsingDefaultInterval = Template.bind({});
exports.UsingDefaultInterval.args = {
    render: (time) => react_1.default.createElement(react_1.default.Fragment, null,
        "The time in milliseconds is ",
        time,
        "."),
};
exports.UsingDefaultInterval.story = {
    name: 'Using Default Interval (5 Seconds)',
};
exports.UsingCustomInterval = Template.bind({});
exports.UsingCustomInterval.args = {
    interval: 1000,
    render: (time) => react_1.default.createElement(react_1.default.Fragment, null,
        "The time in milliseconds is ",
        time,
        "."),
};
exports.UsingCustomInterval.story = {
    name: 'Using 1 Second Interval',
};
