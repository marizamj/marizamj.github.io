import React, { Component } from 'react';
import '../css/Header.css';

import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import MdHome from 'react-icons/lib/md/home';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdCode from 'react-icons/lib/md/code';
import MdMailOutline from 'react-icons/lib/md/mail-outline';

const icons = {
  '/': {
    icon: (
      <MdHome
        style={{ fill: 'transparent', stroke: '#ddd', strokeWidth: 3 }}
        className="header-menu-icon"
      />
    ),
    caption: 'home'
  },
  about: {
    icon: <MdInfoOutline className="header-menu-icon" />,
    caption: 'about'
  },
  skills: { icon: <MdCode className="header-menu-icon" />, caption: 'skills' },
  contact: {
    icon: <MdMailOutline className="header-menu-icon" />,
    caption: 'contact'
  }
};

const Menu = props =>
  <div>
    <div className="header-menu-icon__main">
      <MdClose
        className="header-menu-icon animated flipInX"
        onClick={props.onMenuClick}
      />{' '}
    </div>
    {Object.keys(props.routes).map(route =>
      <div
        key={`menu-link-${route}`}
        className="header-menu-icon__container animated flipInX"
        onClick={() => {
          if (props.location.pathname !== `/${route}`) {
            props.onAnimateUnmountingElement(route);
          }
        }}
        onMouseOver={() => {
          props.onChangeHover(route);
        }}
        onMouseOut={() => {
          props.onChangeHover('');
        }}
      >
        {props.hover === route ? icons[route].caption : icons[route].icon}
      </div>
    )}
  </div>;

class Header extends Component {
  state = {
    hover: ''
  };

  render() {
    const { hover } = this.state;
    const { openMenu, onMenuClick } = this.props;

    return (
      <div className="Header">
        {!openMenu
          ? <MdMenu
              className="header-menu-icon animated flipInX"
              onClick={onMenuClick}
            />
          : <Menu
              {...this.props}
              hover={hover}
              onChangeHover={hover => {
                this.setState({ hover });
              }}
            />}
      </div>
    );
  }
}

export default Header;
