"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
const react_1 = __importDefault(require("react"));
const TimedRenderer_1 = require("./TimedRenderer");
const Demo = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(TimedRenderer_1.TimedRenderer, { interval: 500, render: (time) => (react_1.default.createElement("div", { style: {
                    width: `140px`,
                    height: `100px`,
                    transition: `all 0.5s ease-in`,
                    borderRadius: `${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% / ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}%`,
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    boxShadow: `inset 0 0 0 5px #${Math.floor(Math.random() * 16777215).toString(16)}`,
                } })) })));
};
exports.Demo = Demo;
