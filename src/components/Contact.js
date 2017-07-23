import React, { Component } from 'react';
import '../css/Contact.css';

import MyIcon from './MyIcon';

class Contact extends Component {
  contacts = {
    email: 'mailto:marizamj@gmail.com',
    github: 'https://github.com/marizamj',
    linkedin: 'https://www.linkedin.com/in/zamzhitskaya/',
    facebook: 'https://www.facebook.com/marie.zamzhitskaya',
    instagram: 'https://www.instagram.com/goodmorning_mari/'
  };

  render() {
    return (
      <div className="Contact-wrapper">
        <div className="contact">
          <div className="contact__header animated bounceInLeft">
            Get in touch!
          </div>
          <div className="contact__contacts animated bounceInRight">
            {Object.entries(this.contacts).map(([name, href]) =>
              <div className="contact__icon-container" key={`contact-${name}`}>
                <a target="_blank" href={href}>
                  <MyIcon icon={name} size="1em" color="#ddd" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
