import React, { Component } from 'react';
import styled from 'styled-components';
import { faCopyright, faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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
            <FontAwesomeIcon icon={faCopyright} size="lg" />
            {` ${Year} `}
            {this.props.data.custom_name
              ? this.props.data.custom_name
              : this.props.data.twitch_channel}
          </p>
        </div>
        <div className="attrib">
          <p>
            <a href="//twitch.tv/bobdanoob" style={{ textDecoration: 'none', color: 'white' }}>
              <FontAwesomeIcon icon={faAngleLeft} size="lg" /> Code by Bob /{' '}
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </a>
          </p>
        </div>
      </Foot>
    );
  }
}

export default Footer;
