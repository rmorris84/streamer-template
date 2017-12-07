import React, { Component } from 'react';

class Twitch extends Component {
  componentDidMount() {}
  render() {
    const buttonColor = {
      border: `1px solid ${this.props.data.custom_color}`,
      padding: '1em 3em',
    };
    return (
      <div className="channel-info">
        <img src={this.props.channel.logo} alt="" />
        {!this.props.stream.stream ? (
          <h2 className="subtitle">{this.props.data.offline_tagline}</h2>
        ) : (
          <h2 className="subtitle">{this.props.stream.stream.channel.status}</h2>
        )}
        <a
          className="button"
          href={`//www.twitch.tv/${this.props.data.twitch_channel}`}
          style={buttonColor}
        >
          View Channel
        </a>
      </div>
    );
  }
}

export default Twitch;
