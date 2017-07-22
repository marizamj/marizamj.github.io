import React, { Component } from 'react';
import '../css/Info.css';

class Info extends Component {
  render() {
    const {
      prismAnimationComplete,
      routes,
      location,
      onAnimateUnmountingElement
    } = this.props;

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
          {Object.entries(routes).map(
            ([name, route]) =>
              name !== '/'
                ? <span
                    className="info-nav__link"
                    key={`nav${route}`}
                    onClick={() => {
                      if (location.pathname !== route) {
                        onAnimateUnmountingElement(name);
                      }
                    }}
                  >
                    {name}
                  </span>
                : ''
          )}
        </div>
      </div>
    );
  }
}

export default Info;
