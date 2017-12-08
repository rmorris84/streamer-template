import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import SocialNetworks from './SocialNetworks';
import { media } from './responsive';

const Head = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.md`flex-direction: row;`}
  }
`;

class Header extends Component {
  componentDidMount() {}
  render() {
    return (
      <Head className="container">
        <Brand {...this.props} />
        <SocialNetworks {...this.props} />
      </Head>
    );
  }
}

export default Header;
