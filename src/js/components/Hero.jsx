import React, { Component } from 'react';
import Twitch from './Twitch';

class Hero extends Component {
  componentDidUpdate() {}
  render() {
    return (
      <div id="hero" className="container">
        <div className="intro">
          <Twitch {...this.props} />
        </div>
      </div>
    );
  }
}

export default Hero;
