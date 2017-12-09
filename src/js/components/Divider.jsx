import React, { Component } from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
  width: 200px;
  height: 4px;
  margin: 2em 0;
  background: ${props => props.data.accent_color};
  border: none;
`;

class Divider extends Component {
  render() {
    return !this.props.stream.stream || <Hr {...this.props} />;
  }
}

export default Divider;
