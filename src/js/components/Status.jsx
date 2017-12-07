import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
from {
  opacity: 1;
}
50% {
  opacity: 0.5;
}
to {
  opacity: 1;
}
`;

const Live = styled.span`
  font-size: 1em;
  color: red;
  margin-left: 5px;
  animation: ${pulse} 2s infinite;
`;

class Status extends Component {
  componentDidMount() {}
  render() {
    return !this.props.stream.stream ? <span /> : <Live>&bull;</Live>;
  }
}

export default Status;
