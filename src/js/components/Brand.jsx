import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from './responsive';
import Status from './Status';

const Branding = styled.div`
  position: relative;
  margin-bottom: 20px;
  font-size: calc(2vw + 1vh);
  ${media.md`font-size: 1.5em;`};
  ${media.lg`font-size: 1.75em`};
  ${media.xl`font-size: 2em`};
`;

class Brand extends Component {
  render() {
    return (
      <Branding {...this.props} className="brand">
        {this.props.data.custom_name ? (
          <h1>{this.props.data.custom_name}</h1>
        ) : (
          <h1>{this.props.data.twitch_channel}</h1>
        )}
        {this.props.stream.stream ? <Status {...this.props} /> : <span />}
      </Branding>
    );
  }
}

export default Brand;
