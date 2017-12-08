import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

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
  font-size: 0.8em;
  animation: ${pulse} 2s infinite;
`;

class Status extends Component {
  componentDidMount() {}
  render() {
    return (
      !this.props.stream.stream || (
        <Live {...this.props}>
          <i className="fa fa-circle" style={{ marginRight: '5px' }} />
          LIVE
        </Live>
      )
    );
  }
}

export default Status;
