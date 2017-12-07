import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  text-decoration: none;
  background: transparent;
  font-size: 1.4em;
  color: ${props => props.data.font_color};
  border: 2px solid ${props => props.data.custom_color};
  border-radius: 5px;
  padding: 0.5em 1.2em;
  transition: all 0.5s ease;
  &:hover {
    background: ${props => props.data.custom_color};
  }
`;

class Twitch extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="channel-info">
        <img
          src={this.props.channel.logo}
          alt=""
          style={{ border: `3px solid ${this.props.data.custom_color}`, borderRadius: '5px' }}
        />
        {!this.props.stream.stream ? (
          <p className="title">{this.props.data.offline_tagline}</p>
        ) : (
          <p className="title">{this.props.stream.stream.channel.status}</p>
        )}
        <hr
          style={{
            width: '100px',
            height: '6px',
            background: `${this.props.data.custom_color}`,
            border: 'none',
          }}
        />
        {!this.props.stream.stream ? (
          <span />
        ) : (
          <p className="title">{this.props.stream.stream.game}</p>
        )}
        <Button {...this.props} href={`//www.twitch.tv/${this.props.data.twitch_channel}`}>
          View Channel
        </Button>
      </div>
    );
  }
}

export default Twitch;
