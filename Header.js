import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Cart from './Cart';
import './style.css';

class Header extends Component {
  loginForm = () => {};

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={{ color: '#2a6496' }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listview"
                  exact
                  activeStyle={{ color: '#2a6496' }}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <a className="cursor" onClick={this.loginForm}>
                  Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Header;
