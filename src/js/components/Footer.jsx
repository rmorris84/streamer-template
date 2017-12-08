import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  opacity: 0.4;
`;

class Footer extends Component {
  render() {
    const Year = new Date().getFullYear();
    return (
      <Foot className="container">
        <div className="copyright">
          <p>
            &copy;{` ${Year} `}
            {this.props.data.custom_name
              ? this.props.data.custom_name
              : this.props.data.twitch_channel}
          </p>
        </div>
        <div className="attrib">
          <p>
            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>
              <i className="fa fa-lg fa-angle-left" /> Code by Bob /{' '}
              <i className="fa fa-lg fa-angle-right" />
            </a>
          </p>
        </div>
      </Foot>
    );
  }
}

export default Footer;
