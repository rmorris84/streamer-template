import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { faCircle } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const pulse = keyframes`
from {
  opacity: 1;
}
50% {
  opacity: 0.6;
}
to {
  opacity: 1;
}
`;

const Live = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 102%;
  color: red;
  font-size: 0.7em;
  animation: ${pulse} 2s infinite;
`;

class Status extends Component {
  componentDidMount() {}
  render() {
    return (
      !this.props.stream.stream || (
        <Live {...this.props}>
          <FontAwesomeIcon icon={faCircle} />
          LIVE
        </Live>
      )
    );
  }
}

export default Status;
