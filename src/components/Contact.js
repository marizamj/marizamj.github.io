import React, { Component } from 'react';
import '../css/Contact.css';

import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
  iconStyles = {
    stroke: '#ddd',
    height: '1.3em',
    width: '1.3em',
    position: 'absolute',
    left: '-0.05em',
    top: '-0.05em'
  };
  contacts = {
    Email: (
      <SocialIcon
        url="mailto:marizamj@gmail.com"
        network="email"
        color="#111"
        style={this.iconStyles}
      />
    ),
    GitHub: (
      <SocialIcon
        url="https://github.com/marizamj"
        color="#111"
        style={this.iconStyles}
      />
    ),
    LinkedIn: (
      <SocialIcon
        url="https://www.linkedin.com/in/zamzhitskaya/"
        color="#111"
        style={this.iconStyles}
      />
    ),
    Facebook: (
      <SocialIcon
        url="https://www.facebook.com/marie.zamzhitskaya"
        color="#111"
        style={this.iconStyles}
      />
    )
  };

  render() {
    return (
      <div className="Contact">
        <div className="contact__text">
          <div className="contact__text__header">Get in touch!</div>
          <div className="contact__text__contacts">
            {Object.entries(this.contacts).map(([name, icon]) =>
              <div key={`contact-${name}`} className="SocialIcon-container">
                {icon}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
