import React, { Component } from 'react';
import styled from 'styled-components';
import ChannelLogo from './ChannelLogo';
import StreamTitle from './StreamTitle';
import Category from './Category';
import Stats from './Stats';
import ChannelLink from './ChannelLink';

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Hero extends Component {
  componentDidUpdate() {}
  render() {
    return (
      <ChannelInfo className="container centered">
        <ChannelLogo {...this.props} />
        <Stats {...this.props} />
        <StreamTitle {...this.props} />
        <Category {...this.props} />
        <ChannelLink {...this.props} />
      </ChannelInfo>
    );
  }
}

export default Hero;
