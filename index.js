import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
