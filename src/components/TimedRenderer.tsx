import * as React from 'react';

import { useTimer } from 'react-use-precision-timer';

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
 * See documentation: [TimedRenderer](https://devboldly.github.io/react-timed-renderer/TimedRenderer)
 *
 *  A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 *
 * Powered by [react-use-precision-timer](https://devboldly.github.io/react-use-precision-timer/).
 */
export function TimedRenderer(props: TimedRendererProps): JSX.Element {
  const [time, setTime] = React.useState(new Date().getTime());

  const delay = props.interval ? Math.max(0, props.interval) : 5000;
  const startImmediately = true;
  const callback = (): void => {
    setTime(new Date().getTime());
  };
  useTimer({ delay, startImmediately, callback });

  return <>{props.render ? props.render(time) : undefined}</>;
}

TimedRenderer.defaultProps = {
  interval: 5000,
  render: () => {
    return undefined;
  },
};
