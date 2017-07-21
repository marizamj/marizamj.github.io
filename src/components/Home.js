import React, { Component } from 'react';
import '../css/Home.css';

import Prism from './Prism';
import Info from './Info';

class Home extends Component {
  state = {
    prismAnimationComplete: false
  };

  handleAnimationEnd = event => {
    if (event.animationName === 'bounceOutUp') {
      this.props.onChangeRoute();
    }
  };

  componentDidMount() {
    this.refs.home.addEventListener('animationend', this.handleAnimationEnd);
  }

  componentWillUnmount() {
    this.refs.home.removeEventListener('animationend', this.handleAnimationEnd);
  }

  render() {
    const { prismAnimationComplete } = this.state;
    const { elementToUnmount } = this.props;

    return (
      <div
        ref="home"
        className={
          elementToUnmount === this ? 'Home animated bounceOutUp' : 'Home'
        }
      >
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
