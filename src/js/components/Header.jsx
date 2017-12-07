import React, { Component } from 'react';
import SocialNetworks from './SocialNetworks';
import Status from './Status';

class componentName extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="header" className="container">
        <div className="brand">
          {this.props.data.custom_name ? (
            <span>
              {this.props.data.custom_name}
              <Status {...this.props} />
            </span>
          ) : (
            <span>
              {this.props.data.twitch_channel}
              <Status {...this.props} />
            </span>
          )}
        </div>
        <div className="social">
          <SocialNetworks {...this.props} />
        </div>
      </div>
    );
  }
}

export default componentName;
