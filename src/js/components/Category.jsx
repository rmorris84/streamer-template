import React, { Component } from 'react';
import styled from 'styled-components';

const Subtitle = styled.p`
  text-transform: uppercase;
`;

class Category extends Component {
  render() {
    return !this.props.stream.stream ? (
      <span />
    ) : (
      <Subtitle>
        <i className="fa fa-gamepad" />
        {this.props.stream.stream.game}
      </Subtitle>
    );
  }
}

export default Category;
