import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import MdHome from 'react-icons/lib/md/home';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
import MdMailOutline from 'react-icons/lib/md/mail-outline';

const icons = {
  home: <MdHome className="header-menu-icon" />,
  about: <MdInfoOutline className="header-menu-icon" />,
  something: <MdAllInclusive className="header-menu-icon" />,
  contacts: <MdMailOutline className="header-menu-icon" />
};

const Menu = props =>
  <div>
    <MdClose className="header-menu-icon" onClick={props.onMenuClick} />
    {Object.keys(props.routes).map(route =>
      <Link key={`menu-link-${route}`} to={props.routes[route]}>
        {icons[route]}
      </Link>
    )}
  </div>;

class Header extends Component {
  render() {
    const { openMenu, onMenuClick, routes } = this.props;

    return (
      <div className="Header">
        {!openMenu
          ? <MdMenu className="header-menu-icon" onClick={onMenuClick} />
          : <Menu onMenuClick={onMenuClick} routes={routes} />}
      </div>
    );
  }
}

export default Header;
