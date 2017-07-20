import React, { Component } from 'react';
import '../css/Prism.css';

import { AnimatedLine, AnimatedCircle } from './SVGComponents';

class Prism extends Component {
  state = {
    topV: { x: window.innerWidth / 2, y: window.innerHeight * 0.35 },
    leftV: {
      x: window.innerWidth / 2 - window.innerHeight * 0.35 / 2,
      y: window.innerHeight * 0.35 * 2
    },
    rightV: {
      x: window.innerWidth / 2 + window.innerHeight * 0.35 / 2,
      y: window.innerHeight * 0.35 * 2
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.refs.rainbow.classList.add('opacity');
      this.props.onAnimationComplete();
    }, 4500);
  };

  render() {
    const { topV, leftV, rightV } = this.state;
    const triangleSides = [[topV, leftV], [leftV, rightV], [rightV, topV]];
    const { innerHeight } = window;

    return (
      <div className="Prism">
        <svg className="svgPrism">
          <animate
            attributeName="opacity"
            from="1"
            to="0.5"
            dur="1s"
            begin="4.5s"
            fill="freeze"
          />

          <AnimatedLine
            x1={0}
            y1={innerHeight / 2}
            x2="100%"
            y2={innerHeight / 2}
            style={{ strokeWidth: innerHeight, stroke: '#111' }}
            animations={{
              x1: {
                from: 0,
                to: '100%',
                fill: 'freeze',
                dur: '3s',
                begin: '1s'
              }
            }}
          />

          <g className="triangle">
            {triangleSides.map(([start, end], i) =>
              <g key={`triangle-side${i}`}>
                <AnimatedLine
                  x1={start.x}
                  y1={start.y}
                  x2={start.x}
                  y2={start.y}
                  animations={{
                    x2: {
                      from: start.x,
                      to: end.x,
                      fill: 'freeze',
                      dur: '1.5s',
                      begin: '0.8s'
                    },
                    y2: {
                      from: start.y,
                      to: end.y,
                      fill: 'freeze',
                      dur: '1.5s',
                      begin: '0.8s'
                    }
                  }}
                />

                <AnimatedCircle
                  cx={start.x}
                  cy={start.y}
                  r="0"
                  fill="white"
                  animations={{
                    r: { from: 0, to: 3, dur: '0.5s', fill: 'freeze' },
                    cx: {
                      from: start.x,
                      to: end.x,
                      dur: '1.5s',
                      begin: '0.8s'
                    },
                    cy: { from: start.y, to: end.y, dur: '1.5s', begin: '0.8s' }
                  }}
                />
              </g>
            )}
          </g>

          <AnimatedLine
            x1={0}
            y1={innerHeight / 2}
            x2={0}
            y2={innerHeight / 2}
            animations={{
              x2: {
                from: 0,
                to: '50%',
                fill: 'freeze',
                dur: '1.5s',
                begin: '0.8s'
              }
            }}
          />

          <AnimatedCircle
            cx={0}
            cy={innerHeight / 2}
            r="0"
            fill="white"
            animations={{
              r: { from: 0, to: 3, dur: '0.5s', fill: 'freeze' },
              cx: {
                from: 0,
                to: '50%',
                dur: '1.5s',
                begin: '0.8s',
                fill: 'freeze'
              }
            }}
          />
        </svg>

        <div className="rainbow" ref="rainbow" />
      </div>
    );
  }
}

export default Prism;
