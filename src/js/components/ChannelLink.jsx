import React, { Component } from 'react';
import styled from 'styled-components';
import { faTwitch } from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Button = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  color: ${props => props.data.font_color};
  border: 2px solid ${props => props.data.accent_color};
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em 2em;
  transition: all 0.5s ease;
  &:hover {
    background: ${props => props.data.accent_color};
  }
`;

class ChannelLink extends Component {
  render() {
    return (
      <Button {...this.props} href={`//www.twitch.tv/${this.props.data.twitch_channel}`}>
        <FontAwesomeIcon icon={faTwitch} size="lg" style={{ marginRight: '10px' }} /> Visit Channel
      </Button>
    );
  }
}

export default ChannelLink;
