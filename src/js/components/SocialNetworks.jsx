import React, { Component } from 'react';
import styled from 'styled-components';

const SocialItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
`;

const Social = styled.a`
  font-size: 1.2em;
  color: ${props => props.data.font_color};
  transition: all 0.5s ease;
  &:hover {
    color: ${props => props.data.accent_color};
  }
`;

const Discord = styled.svg`
  fill: ${props => props.data.font_color};
  width: 25px;
  margin-bottom: -7px;
  transition: all 0.5s ease;
  &:hover {
    fill: ${props => props.data.accent_color};
  }
`;

class SocialNetworks extends Component {
  componentDidMount() {}
  render() {
    return (
      <SocialItems>
        {this.props.data.email && (
          <Social {...this.props} href={`mailto:${this.props.data.email}`}>
            <i className="fa fa-fw fa-envelope-o" />
          </Social>
        )}
        {this.props.data.merch_link && (
          <Social {...this.props} href={this.props.data.merch_link}>
            <i className="fa fa-fw fa-shopping-cart" />
          </Social>
        )}
        {this.props.data.twitter && (
          <Social {...this.props} href={`//www.twitter.com/${this.props.data.twitter}`}>
            <i className="fa fa-fw fa-twitter" />
          </Social>
        )}
        {this.props.data.youtube && (
          <Social {...this.props} href={`//www.youtube.com/user/${this.props.data.youtube}`}>
            <i className="fa fa-fw fa-youtube-play" />
          </Social>
        )}
        {this.props.data.facebook && (
          <Social {...this.props} href={`//www.facebook.com/${this.props.data.facebook}`}>
            <i className="fa fa-fw fa-facebook" />
          </Social>
        )}
        {this.props.data.discord && (
          <Social {...this.props} href={`//www.discord.gg/${this.props.data.discord}`}>
            <Discord {...this.props} viewBox="0 0 245 240">
              <path
                className="st0"
                d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
              />
              <path
                className="st0"
                d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
              />
            </Discord>
          </Social>
        )}
        {this.props.data.donation_link && (
          <Social {...this.props} href={this.props.data.donation_link}>
            <i className="fa fa-fw fa-dollar" />
          </Social>
        )}
        {this.props.data.instagram && (
          <Social {...this.props} href={`//www.instagram.com/${this.props.data.instagram}`}>
            <i className="fa fa-fw fa-instagram" />
          </Social>
        )}
        {this.props.data.snapchat && (
          <Social {...this.props} href={`//www.snapchat.com/add/${this.props.data.snapchat}`}>
            <i className="fa fa-fw fa-snapchat-ghost" />
          </Social>
        )}
        {this.props.data.steam && (
          <Social {...this.props} href={`//www.steamcommunity.com/id/${this.props.data.steam}`}>
            <i className="fa fa-fw fa-steam" />
          </Social>
        )}
        {this.props.data.steamgroup && (
          <Social
            {...this.props}
            href={`//www.steamcommunity.com/group/${this.props.data.steamgroup}`}
          >
            <i className="fa fa-fw fa-steam-square" />
          </Social>
        )}
        {this.props.data.reddit && (
          <Social {...this.props} href={`//www.reddit.com/r/${this.props.data.reddit}`}>
            <i className="fa fa-fw fa-reddit-alien" />
          </Social>
        )}
        {this.props.data.github && (
          <Social {...this.props} href={`//www.github.com/${this.props.data.github}`}>
            <i className="fa fa-fw fa-github" />
          </Social>
        )}
        {this.props.data.google && (
          <Social {...this.props} href={`//plus.google.com/${this.props.data.google}`}>
            <i className="fa fa-fw fa-google-plus" />
          </Social>
        )}
        {this.props.data.amazon && (
          <Social {...this.props} href={`//www.amazon.com/${this.props.data.amazon}`}>
            <i className="fa fa-fw fa-amazon" />
          </Social>
        )}
        {this.props.data.pinterest && (
          <Social {...this.props} href={`//www.pinterest.com/${this.props.data.pinterest}`}>
            <i className="fa fa-fw fa-pinterest" />
          </Social>
        )}
        {this.props.data.bandcamp && (
          <Social {...this.props} href={`//${this.props.data.bandcamp}.bandcamp.com/`}>
            <i className="fa fa-fw fa-bandcamp" />
          </Social>
        )}
        {this.props.data.soundcloud && (
          <Social {...this.props} href={`//www.soundcloud.com/${this.props.data.soundcloud}`}>
            <i className="fa fa-fw fa-soundcloud" />
          </Social>
        )}
        {this.props.data.spotify && (
          <Social {...this.props} href={`//open.spotify.com/user/${this.props.data.spotify}`}>
            <i className="fa fa-fw fa-spotify" />
          </Social>
        )}
        {this.props.data.tumblr && (
          <Social {...this.props} href={`//${this.props.data.tumblr}.tumblr.com`}>
            <i className="fa fa-fw fa-tumblr" />
          </Social>
        )}
        {this.props.data.flickr && (
          <Social {...this.props} href={`//www.flickr.com/photos/${this.props.data.flickr}`}>
            <i className="fa fa-fw fa-flickr" />
          </Social>
        )}
        {this.props.data.linkedin && (
          <Social {...this.props} href={`//www.linkedin.com/in/${this.props.data.linkedin}`}>
            <i className="fa fa-fw fa-linkedin-square" />
          </Social>
        )}
        {this.props.data.extra_link1 && (
          <Social {...this.props} href={this.props.data.extra_link1}>
            <i className="fa fa-fw fa-star" />
          </Social>
        )}
        {this.props.data.extra_link2 && (
          <Social {...this.props} href={this.props.data.extra_link2}>
            <i className="fa fa-fw fa-star" />
          </Social>
        )}
        {this.props.data.extra_link3 && (
          <Social {...this.props} href={this.props.data.extra_link3}>
            <i className="fa fa-fw fa-star" />
          </Social>
        )}
      </SocialItems>
    );
  }
}

export default SocialNetworks;
