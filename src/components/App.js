import React, { Component } from 'react';
import '../css/App.css';

import Prism from './Prism';
import Info from './Info';

class App extends Component {
  state = {
    prismAnimationComplete: false
  };

  render() {
    const { prismAnimationComplete } = this.state;

    return (
      <div className="App">
        <Prism
          onAnimationComplete={() => {
            this.setState({ prismAnimationComplete: true });
          }}
        />
        <Info prismAnimationComplete={prismAnimationComplete} />
      </div>
    );
  }
}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
// commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
// velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// mollit anim id est laborum.

export default App;
