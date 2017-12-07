// Dependencies
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import axios from 'axios';

// Components
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

// Data
import data from '../config/config';

// Global Styles
// eslint-disable-next-line
injectGlobal`
body {
  color: ${data.font_color};
}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: process.env.clientId,
      url: 'https://api.twitch.tv/kraken/',
      streamInfo: [],
      channelInfo: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${this.state.url}streams/${data.twitch_channel}`, {
        headers: { 'Client-ID': this.state.id },
      })
      .then(res => this.setState({ streamInfo: res.data }))
      .catch(err => console.log(err));
    axios
      .get(`${this.state.url}channels/${data.twitch_channel}`, {
        headers: { 'Client-ID': this.state.id },
      })
      .then(res => this.setState({ channelInfo: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const divImage = {
      background: `${data.custom_color} url(${data.background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };
    const divVideo = { display: 'initial' };
    const overlayStyle = {
      backgroundColor: `rgba(0, 0, 0, ${data.overlay_opacity})`,
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: '1',
    };
    return (
      <div id="content" style={data.background_video ? divVideo : divImage}>
        <div className="flex" style={overlayStyle}>
          <Header data={data} stream={this.state.streamInfo} />
          <Hero data={data} channel={this.state.channelInfo} stream={this.state.streamInfo} />
          <Footer data={data} />
        </div>
      </div>
    );
  }
}

export default App;
