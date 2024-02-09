/*! For license information please see stories-TimedRenderer-stories.adffb613.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_timed_renderer=self.webpackChunkreact_timed_renderer||[]).push([[764],{"./src/stories/TimedRenderer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UsingCustomInterval:()=>UsingCustomInterval,UsingDefaultInterval:()=>UsingDefaultInterval,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_TimedRenderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TimedRenderer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Stories/TimedRenderer",component:_components_TimedRenderer__WEBPACK_IMPORTED_MODULE_1__.S,parameters:{options:{showPanel:!1}}},UsingDefaultInterval={name:"Using Default Interval (5 Seconds)",args:{render:time=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["The time in milliseconds is ",time,"."]})}},UsingCustomInterval={name:"Using 1 Second Interval",args:{interval:1e3,render:time=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["The time in milliseconds is ",time,"."]})}};UsingDefaultInterval.parameters={...UsingDefaultInterval.parameters,docs:{...UsingDefaultInterval.parameters?.docs,source:{originalSource:"{\n  name: 'Using Default Interval (5 Seconds)',\n  args: {\n    render: (time: number) => <>The time in milliseconds is {time}.</>\n  }\n}",...UsingDefaultInterval.parameters?.docs?.source}}},UsingCustomInterval.parameters={...UsingCustomInterval.parameters,docs:{...UsingCustomInterval.parameters?.docs,source:{originalSource:"{\n  name: 'Using 1 Second Interval',\n  args: {\n    interval: 1000,\n    render: (time: number) => <>The time in milliseconds is {time}.</>\n  }\n}",...UsingCustomInterval.parameters?.docs?.source}}};const __namedExportsOrder=["UsingDefaultInterval","UsingCustomInterval"]},"./src/components/TimedRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>TimedRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_sub_unsub__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-sub-unsub/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const emptyRender=time=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{});function TimedRenderer(_ref){let{interval=5e3,render=emptyRender}=_ref;const[time,setTime]=react__WEBPACK_IMPORTED_MODULE_0__.useState((new Date).getTime());return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const subs=new react_sub_unsub__WEBPACK_IMPORTED_MODULE_1__.us;return subs.setInterval((()=>setTime((new Date).getTime())),Math.max(0,interval)),subs.createCleanup()}),[interval]),render(time)}try{TimedRenderer.displayName="TimedRenderer",TimedRenderer.__docgenInfo={description:"See documentation: [TimedRenderer](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--page)\n\nA TimedRenderer can be used to render a component at timed intervals.\n\nJust provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.",displayName:"TimedRenderer",props:{interval:{defaultValue:{value:"5000"},description:"Time between renders in milliseconds. Defaults to 5000 (5 seconds).",name:"interval",required:!1,type:{name:"number"}},render:{defaultValue:{value:"(time: number): JSX.Element => {\n  return <></>;\n}"},description:"Renders the JSX element. Time parameter (in milliseconds since the epoch) for the start of each period is provided for convenience.\n@param time The time for the beginning of each period in milliseconds since the epoch.\n@returns The JSX element to render, or undefined.",name:"render",required:!1,type:{name:"((time: number) => Element)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TimedRenderer.tsx#TimedRenderer"]={docgenInfo:TimedRenderer.__docgenInfo,name:"TimedRenderer",path:"src/components/TimedRenderer.tsx#TimedRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-sub-unsub/dist/index.js":(__unused_webpack_module,exports)=>{exports.us=void 0;class Subscribe{static subscribe(subscribe){try{return subscribe()}catch(e){console.error(e)}return()=>{}}static subscribeEvent(eventEmitter,eventName,listener){return eventEmitter.addListener(eventName,listener),()=>{eventEmitter.removeListener(eventName,listener)}}static subscribeDOMEvent(domObj,eventName,listener,options){return domObj.addEventListener(eventName,listener,options),()=>{domObj.removeEventListener(eventName,listener,options)}}static setTimeout(handler,delay,...args){const timeout=setTimeout(handler,delay,args);return()=>clearTimeout(timeout)}static setInterval(handler,delay,...args){const interval=setInterval(handler,delay,args);return()=>clearInterval(interval)}static unsubAll(unsubs){if(Array.isArray(unsubs))unsubs.forEach((unsub=>{try{unsub()}catch(e){console.error(e)}}));else try{unsubs()}catch(e){console.error(e)}}static createCleanup(unsubs){return()=>Subscribe.unsubAll(unsubs)}}exports.us=class Subs{constructor(list=[]){this.list=list}subscribe(subscribe){const unsub=Subscribe.subscribe(subscribe);return this.push(unsub),unsub}subscribeEvent(eventEmitter,eventName,listener){const unsub=Subscribe.subscribeEvent(eventEmitter,eventName,listener);return this.push(unsub),unsub}subscribeDOMEvent(domObj,eventName,listener){const unsub=Subscribe.subscribeDOMEvent(domObj,eventName,listener);return this.push(unsub),unsub}setTimeout(handler,delay,...args){const timeout=setTimeout(handler,delay,args),unsub=()=>clearTimeout(timeout);return this.push(unsub),unsub}setInterval(handler,delay,...args){const interval=setInterval(handler,delay,args),unsub=()=>clearInterval(interval);return this.push(unsub),unsub}push(unsub){this.list.push(unsub)}unsubAll(){Subscribe.unsubAll(this.list),this.list.splice(0,this.list.length)}createCleanup(){return()=>{this.unsubAll()}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);