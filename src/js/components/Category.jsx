import React, { Component } from 'react';
import styled from 'styled-components';
import { faGamepad } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Subtitle = styled.p`
  display: flex;
  text-transform: uppercase;
  color: ${props => props.data.accent_color};
`;

class Category extends Component {
  render() {
    return !this.props.stream.stream ? (
      <span />
    ) : (
      <Subtitle {...this.props}>
        <FontAwesomeIcon icon={faGamepad} style={{ color: 'white', marginRight: '5px' }} />
        {this.props.stream.stream.game}
      </Subtitle>
    );
  }
}

export default Category;
