import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from './responsive';

const Title = styled.h2`
  margin-top: 1em;
  margin-bottom: 5px;
  text-transform: capitalize;
  font-size: calc(2vw + 2vh);
  ${media.md`font-size: 1.5em;`};
  ${media.lg`font-size: 1.75em`};
  ${media.xl`font-size: 2em`};
`;

class StreamTitle extends Component {
  render() {
    return !this.props.stream.stream ? (
      <Title>{this.props.data.offline_tagline}</Title>
    ) : (
      <Title>{this.props.stream.stream.channel.status}</Title>
    );
  }
}

export default StreamTitle;
