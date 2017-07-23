import React, { Component } from 'react';
import '../css/Header.css';

import MyIcon from './MyIcon';

const Menu = props =>
  <div>
    <div
      onClick={props.onMenuClick}
      className="header-menu-icon__main animated flipInX"
    >
      <MyIcon icon="close" color="#ddd" size="1em" />
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
        {props.hover === route
          ? route === '/' ? 'home' : route
          : <MyIcon
              icon={route === '/' ? 'home' : route}
              size="1em"
              color="#ddd"
            />}
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
          ? <div
              onClick={onMenuClick}
              className="header-menu-icon__main animated flipInX"
            >
              <MyIcon icon="menu" color="#ddd" size="1em" />
            </div>
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
