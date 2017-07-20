import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

class App extends Component {
  state = {
    openMenu: false
  };

  routes = {
    home: '/',
    about: '/about',
    something: '/something',
    contacts: '/contacts'
  };

  toggleMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu } = this.state;

    return (
      <div className="App">
        <Header
          openMenu={openMenu}
          onMenuClick={this.toggleMenu}
          routes={this.routes}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    );
  }
}

export default App;
