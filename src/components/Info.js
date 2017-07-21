import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Info.css';

class Info extends Component {
  render() {
    const { prismAnimationComplete } = this.props;

    const navItems = ['about', 'something', 'contacts'];

    return (
      <div className="Info">
        <div
          className={
            prismAnimationComplete
              ? 'info-name animated bounceInRight'
              : 'info-name-hidden'
          }
        >
          Marie Zamzhitskaya
        </div>
        <div
          className={
            prismAnimationComplete
              ? 'info-nav animated bounceInLeft'
              : 'info-nav-hidden'
          }
        >
          {navItems.map(item =>
            <Link to={`/${item}`} className="info-nav__link" key={`nav${item}`}>
              {item}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Info;
