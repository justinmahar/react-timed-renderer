import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { TimedRenderer, TimedRendererProps } from '../components/TimedRenderer';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: TimedRendererProps, children: React.ReactNode = undefined): RenderResult {
  return render(<TimedRenderer {...props}>{children}</TimedRenderer>);
}

describe('TimedRenderer', () => {
  test('should render without crashing', async () => {
    const props: TimedRendererProps = {};
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
