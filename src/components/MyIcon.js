import React, { Component } from 'react';
import icons from '../lib/icons.json';

class MyIcon extends Component {
  render() {
    const { size, icon, color, outline, strokeWidth } = this.props;
    return (
      <svg
        width={size}
        height={size}
        viewBox={icons[icon].viewBox}
        style={
          outline
            ? { stroke: color, fill: 'transparent', strokeWidth }
            : { fill: color }
        }
      >
        {icons[icon].paths.map((path, i) =>
          <path key={`${icon}-path${i}`} d={path} />
        )}
        <path d={icons[icon].path} />
      </svg>
    );
  }
}

export default MyIcon;
