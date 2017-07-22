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

    return (
      <div className="Home">
        <Info prismAnimationComplete={prismAnimationComplete} />
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
