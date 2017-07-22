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
    const { elementToUnmount, animate, name } = this.props;

    const classMount = animate.in
      ? 'AnimatedComponent animated fadeInUp'
      : 'AnimatedComponent animated fadeInUp skipAnimation';
    const classUnmount = animate.out
      ? 'AnimatedComponent animated bounceOutUp'
      : 'AnimatedComponent animated bounceOutUp skipAnimation';

    return (
      <div
        ref="main"
        className={elementToUnmount === `/${name}` ? classUnmount : classMount}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AnimatedComponent;
