import React, { Component } from 'react';
import styled from 'styled-components';

const StatsDiv = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StatItem = styled.li`
  margin: 0 10px;
  padding-right: 8px;
  border-radius: 3px;
  background: ${props => props.data.accent_color};
`;

class Stats extends Component {
  render() {
    return (
      <StatsDiv>
        <StatItem {...this.props}>
          <i className="fa fa-eye" style={{ margin: '8px' }} />
          {this.props.channel.views}
        </StatItem>
        <StatItem {...this.props}>
          <i className="fa fa-users" style={{ margin: '8px' }} />
          {this.props.channel.followers}
        </StatItem>
      </StatsDiv>
    );
  }
}

export default Stats;
