"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_use_timer_1 = require("@devboldly/react-use-timer");
/**
 * See documentation: https://devboldly.github.io/react-timed-renderer/TimedRenderer
 *
 *  A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 *
 * Powered by [react-use-precision-timer](https://devboldly.github.io/react-use-precision-timer/).
 */
function TimedRenderer(props) {
    var _a = React.useState(new Date().getTime()), time = _a[0], setTime = _a[1];
    var delay = props.interval ? Math.max(0, props.interval) : 5000;
    var startImmediately = true;
    var callback = function () {
        setTime(new Date().getTime());
    };
    react_use_timer_1.useTimer({ delay: delay, startImmediately: startImmediately, callback: callback });
    return React.createElement(React.Fragment, null, props.render ? props.render(time) : undefined);
}
exports.TimedRenderer = TimedRenderer;
TimedRenderer.defaultProps = {
    interval: 5000,
    render: function () {
        return undefined;
    },
};
