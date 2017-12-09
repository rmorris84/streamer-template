import React, { Component } from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
  width: 250px;
  height: 3px;
  margin: 1em;
  background: ${props => props.data.accent_color};
  border: none;
`;

class Divider extends Component {
  render() {
    return !this.props.stream.stream || <Hr {...this.props} />;
  }
}

export default Divider;
