import React, { Component } from 'react';
import '../css/Home.css';

import Prism from './Prism';
import Info from './Info';

class Home extends Component {
  render() {
    const { routes, location, onAnimateUnmountingElement } = this.props;

    return (
      <div className="Home">
        <Info
          routes={routes}
          location={location}
          onAnimateUnmountingElement={onAnimateUnmountingElement}
        />
        <Prism />
      </div>
    );
  }
}

export default Home;
