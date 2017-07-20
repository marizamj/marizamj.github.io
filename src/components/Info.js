import React, { Component } from 'react';
import '../css/Info.css';
import 'animate.css';

import { AnimatedLine, AnimatedCircle } from './SVGComponents';

class Info extends Component {
  render() {
    const { prismAnimationComplete } = this.props;

    const navItems = ['about', 'something', 'contacts'];

    return (
      <div className="Info">
        <div
          className={
            prismAnimationComplete
              ? 'info-name animated bounceInRight'
              : 'info-name-hidden'
          }
        >
          Marie Zamzhitskaya
        </div>
        <div
          className={
            prismAnimationComplete
              ? 'info-nav animated bounceInLeft'
              : 'info-nav-hidden'
          }
        >
          {navItems.map(item =>
            <div className="info-nav__item" key={`nav${item}`}>
              {item}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Info;
