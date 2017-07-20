import React, { Component } from 'react';
import '../css/Header.css';

import MdMenu from 'react-icons/lib/md/menu';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <MdMenu className="header-menu-icon" />
      </div>
    );
  }
}

export default Header;
