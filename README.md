<h2 align="center">
  <a href="https://github.com/devboldly/react-timed-renderer">React Timed Renderer</a>
</h2>
<h3 align="center">
  React component that re-renders at the interval provided.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-timed-renderer">
    <img src="https://badge.fury.io/js/react-timed-renderer.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/devboldly/react-timed-renderer/actions?query=workflow%3ATests">
    <img src="https://github.com/devboldly/react-timed-renderer/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/devboldly/react-timed-renderer/actions?query=workflow%3ADeploy">
    <img src="https://github.com/devboldly/react-timed-renderer/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://devboldly.github.io/react-timed-renderer/)**.

👁️ **[Live Demo](https://devboldly.github.io/react-timed-renderer/TimedRenderer#example)**

## Overview

A component that re-renders at regular intervals.

Just provide the interval in milliseconds and a render prop.

The built-in [precision timer](https://devboldly.github.io/react-use-precision-timer/) will handle the rest!

### Features include:

- **🙌 Simple and easy**
  - Render components at timed intervals with ease.
- **🎯 Precise timing**
  - Underlying timer is both accurate and precise.
- **🧰 Versatile**
  - A useful tool to have in your React toolkit.

## Installation

```
npm i react-timed-renderer
```

## Quick Start

```jsx
import { TimedRenderer } from 'react-timed-renderer';
```

```jsx
<TimedRenderer
  interval={1000}
  render={time => (
    <div>Rendered at: {time}</div>
  )}
/>
```

Provide an interval in milliseconds and a render prop. 

The render prop receives a single argument, which is the time (in milliseconds) at which the render occurred, in case that's useful to you.

See the [demo](https://devboldly.github.io/react-timed-renderer/TimedRenderer#example) for an interactive example using CSS transitions.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See the [library template](https://tinyurl.com/ya3k258d) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-timed-renderer/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/devboldly/react-timed-renderer/stargazers): [👉⭐](https://github.com/devboldly/react-timed-renderer/stargazers)

## MIT License

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```