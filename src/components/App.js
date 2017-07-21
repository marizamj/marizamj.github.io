import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import 'animate.css';
import '../css/App.css';

import AnimatedComponent from './AnimatedComponent';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

class App extends Component {
  state = {
    openMenu: false,
    elementToUnmount: null,
    nextRoute: ''
  };

  routes = {
    home: '/',
    about: '/about',
    something: '/something',
    contacts: '/contacts'
  };

  animateUnmountingElement = nextRoute => {
    const { pathname } = this.props.location;

    if (pathname !== nextRoute) {
      this.setState({ elementToUnmount: this[pathname], nextRoute });
    }
  };

  changeRoute = route => {
    this.props.history.push(this.state.nextRoute);
  };

  toggleMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu, elementToUnmount } = this.state;

    const changeRouteProps = {
      onAnimateUnmountingElement: this.animateUnmountingElement,
      onChangeRoute: this.changeRoute,
      elementToUnmount
    };

    return (
      <div className="App">
        <Header
          openMenu={openMenu}
          onMenuClick={this.toggleMenu}
          routes={this.routes}
          onAnimateUnmountingElement={this.animateUnmountingElement}
          location={this.props.location}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <Home ref={el => (this['/'] = el)} {...changeRouteProps} />}
          />
          <Route
            path="/about"
            render={() =>
              <AnimatedComponent
                key={'about'}
                ref={el => (this['/about'] = el)}
                {...changeRouteProps}
              >
                <About />
              </AnimatedComponent>}
          />
          <Route
            path="/contacts"
            render={() =>
              <AnimatedComponent
                key={'contacts'}
                ref={el => (this['/contacts'] = el)}
                {...changeRouteProps}
              >
                <Contacts />
              </AnimatedComponent>}
          />

          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
