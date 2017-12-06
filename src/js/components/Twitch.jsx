import React, { Component } from 'react';
import axios from 'axios';
import Status from './Status';

class Twitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: process.env.clientId,
      url: `https://api.twitch.tv/kraken/channels/${this.props.data.twitch_channel}`,
      info: null,
    };
  }
  componentDidMount() {
    axios
      .get(this.state.url, {
        headers: { 'Client-ID': this.state.id },
      })
      .then(res => this.setState({ info: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <img src={this.state.info && this.state.info.logo} className="profile-pic" alt="logo" />
        <h1 className="title">
          {this.props.data.custom_name
            ? this.props.data.custom_name
            : this.props.data.twitch_channel}
        </h1>
        {this.state.info ? (
          <h2 className="subtitle">{this.state.info.status}</h2>
        ) : (
          <h2 className="subtitle">{this.props.data.tagline}</h2>
        )}
        <Status {...this.props} />
      </div>
    );
  }
}

export default Twitch;
