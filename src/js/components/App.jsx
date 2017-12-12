// Dependencies
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
import $ from 'jquery';
import tubular from 'jquery_tubular_plugin';

// Components
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

import * as config from '../config';

// Global Styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://api.twitch.tv/kraken/',
      streamInfo: [],
      channelInfo: [],
    };
  }
  async componentDidMount() {
    await config.init();
    const data = config.get();
    axios
      .get(`${this.state.url}streams/${data.twitch_channel}`, {
        headers: { 'Client-ID': data.api_key },
      })
      .then(res => this.setState({ streamInfo: res.data }))
      .catch(err => console.log(`Unable to fetch Twitch API ${err}`));
    axios
      .get(`${this.state.url}channels/${data.twitch_channel}`, {
        headers: { 'Client-ID': data.api_key },
      })
      .then(res => this.setState({ channelInfo: res.data }))
      .catch(err => console.log(`Unable to fetch Twitch API ${err}`));
    if (data.background_video) {
      $('body').tubular({
        videoId: data.background_video,
        start: data.background_start,
        wrapperZIndex: -1,
      });
    }
    document.title = `${data.twitch_channel} - ${data.site_title}`;
  }
  render() {
    const data = config.get();
    injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');
    @import url("${data.font_url}");
    body {color: ${data.font_color};}
    * {box-sizing: border-box;}
    html,body {margin: 0;padding: 0;background: #000;font-family: 'Roboto', sans-serif; font-weight: 500;overflow-x: hidden;}
    h1,h2 {display: inline-block;font-family: ${data.brand_font};font-weight: ${
  data.font_weight
}; padding: 0; margin: 0;}
    p {margin: 0;padding: 0;}
    .container {width: calc(100% - 4em);max-width: 1600px;margin: 0 auto;}
    #hero {display: flex;flex-direction: column;justify-content: center;align-items: center;}
    .centered {text-align: center;}
  `;
    const Content = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url("${data.background_image}");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 99;
    &:after {
      content: '';
      background: linear-gradient(135deg, #000, #000);
      width: 100%;
      height: 100%;
      opacity: ${data.overlay_opacity};
      top: 0;
      left: 0;
      display: block;
      z-index: -3;
      position: absolute;
    }
  `;
    if (data === '') {
      return null;
    }
    return (
      <Content>
        <Header data={data} stream={this.state.streamInfo} />
        <Hero data={data} channel={this.state.channelInfo} stream={this.state.streamInfo} />
        <Footer data={data} />
      </Content>
    );
  }
}

export default App;
