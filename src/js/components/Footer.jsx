import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="container">
        <div className="copyright">
          <p>
            &copy;{' '}
            {this.props.data.custom_name
              ? this.props.data.custom_name
              : this.props.data.twitch_channel}
          </p>
        </div>
        <div className="attrib">
          <p>Made by Bob</p>
        </div>
      </div>
    );
  }
}

export default Footer;
