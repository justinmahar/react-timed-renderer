/*! For license information please see 1-README-stories-mdx.086a9d4d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_timed_renderer=self.webpackChunkreact_timed_renderer||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  ⏳ React Timed Renderer\n</h2>\n<h3 align="center">\n  React component that re-renders at the interval provided.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-timed-renderer" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-timed-renderer.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-timed-renderer/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-timed-renderer/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-timed-renderer/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-timed-renderer/)**.\n\n[![Demo](https://justinmahar.github.io/react-timed-renderer/demo.gif "Demo")](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example)\n\n👁️ **[Live Demo](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example)**\n\n## Overview\n\nA component that re-renders at regular intervals.\n\nJust provide the interval in milliseconds and a render prop.\n\n### Features include:\n\n- **🙌 Simple and easy**\n  - Render components at timed intervals with ease.\n- **🎯 Straightforward**\n  - Dead simple and straightforward timed component.\n- **🧰 Versatile**\n  - A useful tool to have in your React toolkit.\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!\n\n<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i react-timed-renderer\n```\n\n## Quick Start\n\n```jsx\nimport { TimedRenderer } from "react-timed-renderer";\n```\n\n```jsx\n<TimedRenderer\n  interval={1000}\n  render={(time) => <div>Rendered at: {time}</div>}\n/>\n```\n\nProvide an `interval` in milliseconds and a `render` prop.\n\nThe `render` prop receives a single argument, which is the time (in Unix milliseconds) at which the render occurred, in case that\'s useful to you.\n\nSee the [demo](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page#example) for an example using CSS transitions.\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-timed-renderer/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-timed-renderer/stargazers): [👉⭐](https://github.com/justinmahar/react-timed-renderer/stargazers)\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-timed-renderer/?path=/story/license--page).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);