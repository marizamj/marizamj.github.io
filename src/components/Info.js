import React, { Component } from 'react';
import '../css/Info.css';

class Info extends Component {
  render() {
    const { routes, location, onAnimateUnmountingElement } = this.props;

    return (
      <div className="Info">
        <div className="info-name animated bounceInRight">
          <span className="info-name__word">Marie</span>{' '}
          <span className="info-name__word">Zamzhitskaya</span>
        </div>
        <div className="info-nav animated bounceInLeft">
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
