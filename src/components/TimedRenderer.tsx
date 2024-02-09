import * as React from 'react';
import { Subs } from 'react-sub-unsub';

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

const emptyRender = (time: number): JSX.Element => {
  return <></>;
};

/**
 * See documentation: [TimedRenderer](https://justinmahar.github.io/react-timed-renderer/?path=/story/docs-timedrenderer--docs)
 *
 * A TimedRenderer can be used to render a component at timed intervals.
 *
 * Just provide the interval in milliseconds and a render prop, and the component will reliably render at the interval provided.
 */
export function TimedRenderer({ interval = 5000, render = emptyRender }: TimedRendererProps): JSX.Element {
  const [time, setTime] = React.useState(new Date().getTime());
  React.useEffect(() => {
    const subs = new Subs();
    subs.setInterval(() => setTime(new Date().getTime()), Math.max(0, interval));
    return subs.createCleanup();
  }, [interval]);
  return render(time);
}
