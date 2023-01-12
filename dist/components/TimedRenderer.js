"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedRenderer = void 0;
const React = __importStar(require("react"));
const react_use_precision_timer_1 = require("react-use-precision-timer");
const emptyRender = (time) => {
    return React.createElement(React.Fragment, null);
};
/**
 * See documentation: [TimedRenderer](https://justinmahar.github.io/react-timed-renderer/TimedRenderer)
 *
 * A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 *
 * Powered by [react-use-precision-timer](https://justinmahar.github.io/react-use-precision-timer/).
 */
function TimedRenderer({ interval = 5000, render = emptyRender }) {
    const [time, setTime] = React.useState(new Date().getTime());
    const delay = Math.max(0, interval);
    const callback = React.useCallback(() => {
        setTime(new Date().getTime());
    }, []);
    (0, react_use_precision_timer_1.useTimer)({ delay, startImmediately: true }, callback);
    return render(time);
}
exports.TimedRenderer = TimedRenderer;
