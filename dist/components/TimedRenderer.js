"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedRenderer = void 0;
var React = __importStar(require("react"));
var react_use_precision_timer_1 = require("react-use-precision-timer");
/**
 * See documentation: [TimedRenderer](https://justinmahar.github.io/react-timed-renderer/TimedRenderer)
 *
 *  A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 *
 * Powered by [react-use-precision-timer](https://justinmahar.github.io/react-use-precision-timer/).
 */
function TimedRenderer(props) {
    var _a = React.useState(new Date().getTime()), time = _a[0], setTime = _a[1];
    var delay = props.interval ? Math.max(0, props.interval) : 5000;
    var startImmediately = true;
    var callback = function () {
        setTime(new Date().getTime());
    };
    react_use_precision_timer_1.useTimer({ delay: delay, startImmediately: startImmediately, callback: callback });
    return React.createElement(React.Fragment, null, props.render ? props.render(time) : undefined);
}
exports.TimedRenderer = TimedRenderer;
TimedRenderer.defaultProps = {
    interval: 5000,
    render: function () {
        return undefined;
    },
};
