<h2 align="center">
  ⏳ React Timed Renderer
</h2>
<h3 align="center">
  React component that re-renders at the interval provided.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-timed-renderer" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-timed-renderer.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-timed-renderer/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-timed-renderer/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-timed-renderer/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-timed-renderer/)**.

[![Demo](https://justinmahar.github.io/react-timed-renderer/demo.gif "Demo")](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example)

👁️ **[Live Demo](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example)**

## Overview

A component that re-renders at regular intervals.

Just provide the interval in milliseconds and a render prop.

The built-in [precision timer](https://justinmahar.github.io/react-use-precision-timer/) will handle the rest!

### Features include:

- **🙌 Simple and easy**
  - Render components at timed intervals with ease.
- **🎯 Precise timing**
  - Underlying timer is both accurate and precise.
- **🧰 Versatile**
  - A useful tool to have in your React toolkit.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-timed-renderer
```

## Quick Start

```jsx
import { TimedRenderer } from "react-timed-renderer";
```

```jsx
<TimedRenderer
  interval={1000}
  render={(time) => <div>Rendered at: {time}</div>}
/>
```

Provide an `interval` in milliseconds and a `render` prop.

The `render` prop receives a single argument, which is the time (in Unix milliseconds) at which the render occurred, in case that's useful to you.

See the [demo](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example) for an example using CSS transitions.

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-timed-renderer/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-timed-renderer/stargazers): [👉⭐](https://github.com/justinmahar/react-timed-renderer/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-timed-renderer/?path=/story/license--page).