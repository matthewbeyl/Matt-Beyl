import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from '../src/Layouts/Header/Header';
import Footer from '../src/Layouts/Footer/Footer';
import Home from '../src/Views/Home/Home';
import Bio from '../src/Views/Bio/Bio';
import Portfolio from '../src/Views/Portfolio/Portfolio';
import Resume from '../src/Views/Resume/Resume';
import Contact from '../src/Views/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                path="/bio"
                component={Bio}
              />
              <Route
                path="/home"
                component={Home}
              />
              <Route
                path="/portfolio"
                component={Portfolio}
              />
              <Route
                path="/resume"
                component={Resume}
              />
              <Route
                path="/contact"
                component={Contact}
              />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
