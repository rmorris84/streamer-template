import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from './responsive';

const Logo = styled.img`
  margin: 1em;
  min-width: calc(2vw + 250px);
`;

const ChannelLogo = props => <Logo src={props.channel.logo} alt="" />;

export default ChannelLogo;
