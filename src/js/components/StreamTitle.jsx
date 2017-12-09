import React from 'react';
import PropTypes from 'prop-types';
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

const StreamTitle = props =>
  (!props.stream.stream ? (
    <Title>{props.data.offline_tagline}</Title>
  ) : (
    <Title>{props.stream.stream.channel.status}</Title>
  ));

export default StreamTitle;
