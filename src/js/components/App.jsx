// Dependencies
import React, { Component } from 'react';

// Components
import Navbar from './Navbar';
import Hero from './Hero';

// Data
import Data from '../config/config';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar data={Data} />
        <Hero data={Data} />
      </div>
    );
  }
}

export default App;
