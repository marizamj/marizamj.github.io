import React, { Component } from 'react';

const AnimatedLine = props => {
  const { x1, y1, x2, y2, style, filter, animations } = props;

  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} filter={filter}>
      {animations
        ? Object.keys(animations).map(animation => {
            const attrs = animations[animation];
            return (
              <animate
                key={Math.random()}
                attributeName={animation}
                {...attrs}
              />
            );
          })
        : null}
    </line>
  );
};

const AnimatedCircle = props => {
  const { cx, cy, r, fill, filter, animations } = props;

  return (
    <circle cx={cx} cy={cy} r={r} fill={fill} filter={filter}>
      {animations
        ? Object.keys(animations).map(animation => {
            const attrs = animations[animation];
            return (
              <animate
                key={Math.random()}
                attributeName={animation}
                {...attrs}
              />
            );
          })
        : null}
    </circle>
  );
};

export { AnimatedLine, AnimatedCircle };
