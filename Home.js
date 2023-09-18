import React, { Component } from 'react';
import './style.css';

import SimpleSlider from './Slider';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Test by UO</h1>
        <hr />
        <div>
          <div className="col-6">
            <SimpleSlider />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}

export default Home;
