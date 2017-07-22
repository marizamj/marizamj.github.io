import React, { Component } from 'react';
import '../css/Header.css';

import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import MdHome from 'react-icons/lib/md/home';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
import MdMailOutline from 'react-icons/lib/md/mail-outline';

const icons = {
  '/': <MdHome className="header-menu-icon" />,
  about: <MdInfoOutline className="header-menu-icon" />,
  something: <MdAllInclusive className="header-menu-icon" />,
  contacts: <MdMailOutline className="header-menu-icon" />
};

const Menu = props =>
  <div>
    <MdClose className="header-menu-icon" onClick={props.onMenuClick} />
    {Object.keys(props.routes).map(route =>
      <div
        key={`menu-link-${route}`}
        className="header-menu-icon__container"
        onClick={() => {
          if (props.location.pathname !== `/${route}`) {
            props.onAnimateUnmountingElement(route);
          }
        }}
      >
        {icons[route]}
      </div>
    )}
  </div>;

class Header extends Component {
  render() {
    const { openMenu, onMenuClick } = this.props;

    return (
      <div className="Header">
        {!openMenu
          ? <MdMenu className="header-menu-icon" onClick={onMenuClick} />
          : <Menu {...this.props} />}
      </div>
    );
  }
}

export default Header;
