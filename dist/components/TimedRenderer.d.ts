/// <reference types="react" />
export interface TimedRendererProps {
    /** Time between renders in milliseconds. Defaults to 5000 (5 seconds). */
    interval?: number;
    /**
     * Renders the JSX element. Time parameter (in milliseconds since the epoch) for the start of each period is provided for convenience.
     *
     * @param time The time for the beginning of each period in milliseconds since the epoch.
     * @returns The JSX element to render, or undefined.
     */
    render?: (time: number) => JSX.Element;
}
/**
 * See documentation: https://devboldly.github.io/react-timed-renderer/TimedRenderer
 *
 *  A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 *
 * Powered by [react-use-precision-timer](https://devboldly.github.io/react-use-precision-timer/).
 */
export declare function TimedRenderer(props: TimedRendererProps): JSX.Element;
export declare namespace TimedRenderer {
    var defaultProps: {
        interval: number;
        render: () => undefined;
    };
}
