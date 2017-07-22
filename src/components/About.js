import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="about__text">
          <p>Hi!</p>
          <p>I&#039;m a front-end developer based in Amsterdam.</p>
          <p>
            I enjoy studying new technologies and building complex web
            applications that are practical, responsive and pleasant to use.
          </p>
          <p>Contact me if you have any questions or ideas for cooperation.</p>
        </div>
      </div>
    );
  }
}

export default About;
