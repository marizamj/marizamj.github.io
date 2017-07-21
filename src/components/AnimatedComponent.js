import React, { Component } from 'react';
import '../css/AnimatedComponent.css';

class AnimatedComponent extends Component {
  handleAnimationEnd = event => {
    if (event.animationName === 'bounceOutUp') {
      this.props.onChangeRoute();
    }
  };

  componentDidMount() {
    this.refs.main.addEventListener('animationend', this.handleAnimationEnd);
  }

  componentWillUnmount() {
    this.refs.main.removeEventListener('animationend', this.handleAnimationEnd);
  }

  render() {
    const { elementToUnmount } = this.props;

    return (
      <div
        ref="main"
        className={
          elementToUnmount === `/${this.props.name}`
            ? 'AnimatedComponent animated bounceOutUp'
            : 'AnimatedComponent animated fadeInUp'
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default AnimatedComponent;
