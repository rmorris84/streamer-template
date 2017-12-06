import React, { Component } from 'react';
import Twitch from './Twitch';

class Hero extends Component {
  componentDidMount() {}
  render() {
    const divStyle = {
      background: `${this.props.data.custom_color} url(${this.props.data.background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div id="hero" className="hero" style={divStyle}>
        <div className="container">
          <div className="intro">
            <Twitch {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
