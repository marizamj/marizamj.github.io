import React, { Component } from 'react';
import '../css/Home.css';

import Prism from './Prism';
import Info from './Info';

class Home extends Component {
  state = {
    prismAnimationComplete: false
  };

  render() {
    const { prismAnimationComplete } = this.state;
    const { routes, location, onAnimateUnmountingElement } = this.props;

    return (
      <div className="Home">
        <Info
          routes={routes}
          location={location}
          onAnimateUnmountingElement={onAnimateUnmountingElement}
          prismAnimationComplete={prismAnimationComplete}
        />
        <Prism
          onAnimationComplete={() => {
            this.setState({ prismAnimationComplete: true });
          }}
        />
      </div>
    );
  }
}

export default Home;
