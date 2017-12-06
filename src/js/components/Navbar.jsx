import React, { Component } from 'react';
import SocialNetworks from './SocialNetworks';

class componentName extends Component {
  render() {
    return (
      <div id="navbar">
        <div className="container">
          <div className="row">
            <div className="col brand">
              {this.props.data.custom_name ? (
                <span>{this.props.data.custom_name}</span>
              ) : (
                <span>{this.props.data.twitch_channel}</span>
              )}
            </div>
            <div className="col social">
              <SocialNetworks {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
