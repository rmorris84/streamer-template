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

const Button = styled.button`
  background: transparent;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid ${props => props.data.custom_color};
  border-radius: 3px;
  transition: background 0.5s ease;
  &:hover {
    background: ${props => props.data.custom_color};
    color: black;
  }
`;

const Recording = styled.i`
  color: red;
  margin-left: 5px;
  animation: ${pulse} 2s infinite;
`;

class Status extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="status">
        <Button {...this.props}>
          {!this.props.stream.stream ? (
            <span>Offline</span>
          ) : (
            <span>
              Online<Recording className="fa fa-circle" />
            </span>
          )}
        </Button>
      </div>
    );
  }
}

export default Status;
