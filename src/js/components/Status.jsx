import React, { Component } from 'react';
import axios from 'axios';
import { setInterval } from 'timers';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: process.env.clientId,
      url: `https://api.twitch.tv/kraken/streams/${this.props.data.twitch_channel}`,
      online: null,
    };
  }
  componentDidMount() {
    const delay = 5000;
    setInterval(() => this.getStatus(), delay);
  }
  getStatus() {
    axios
      .get(this.state.url, {
        headers: { 'Client-ID': this.state.id },
      })
      .then(res => this.setState({ online: res.data }))
      .catch(err => console.log(err));
  }
  checkingStatus() {
    if (this.state.online === null) {
      return (
        <span>
          <i className="fa fa-spinner fa-pulse fa-lg fa-fw" />
        </span>
      );
    } else if (this.state.online.stream) {
      return <span>Online Now!</span>;
    }
    return <span>Offline</span>;
  }
  render() {
    return <div className="status">{this.checkingStatus()}</div>;
  }
}

export default Status;
