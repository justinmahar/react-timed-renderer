import React from 'react';
import { DivProps } from 'react-html-props';
import { TimedRenderer } from './TimedRenderer';

export interface DemoProps extends DivProps {}

export const Demo = ({ ...props }: DemoProps) => {
  return (
    <div>
      <TimedRenderer
        interval={500}
        render={(time) => (
          <div
            style={{
              width: `140px`,
              height: `100px`,
              transition: `all 0.5s ease-in`,
              borderRadius: `${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}% ${Math.floor(
                Math.random() * 101,
              )}% ${Math.floor(Math.random() * 101)}% / ${Math.floor(Math.random() * 101)}% ${Math.floor(
                Math.random() * 101,
              )}% ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}%`,
              backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              boxShadow: `inset 0 0 0 5px #${Math.floor(Math.random() * 16777215).toString(16)}`,
            }}
          />
        )}
      />
    </div>
  );
};
