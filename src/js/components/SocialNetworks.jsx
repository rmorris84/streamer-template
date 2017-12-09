import React, { Component } from 'react';
import styled from 'styled-components';
import {
  faEnvelope,
  faShoppingCart,
  faDollarSign,
  faLink,
} from '@fortawesome/fontawesome-free-solid';
import {
  faTwitter,
  faYoutube,
  faFacebookF,
  faDiscord,
  faInstagram,
  faSnapchatGhost,
  faSteam,
  faSteamSymbol,
  faRedditAlien,
  faGithub,
  faGooglePlus,
  faAmazon,
  faPinterest,
  faBandcamp,
  faSoundcloud,
  faSpotify,
  faTumblr,
  faFlickr,
  faLinkedin,
} from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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

class SocialNetworks extends Component {
  componentDidMount() {}
  render() {
    return (
      <SocialItems>
        {this.props.data.email && (
          <Social {...this.props} href={`mailto:${this.props.data.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Social>
        )}
        {this.props.data.merch_link && (
          <Social {...this.props} href={this.props.data.merch_link}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Social>
        )}
        {this.props.data.twitter && (
          <Social {...this.props} href={`//www.twitter.com/${this.props.data.twitter}`}>
            <FontAwesomeIcon icon={faTwitter} />
          </Social>
        )}
        {this.props.data.youtube && (
          <Social {...this.props} href={`//www.youtube.com/user/${this.props.data.youtube}`}>
            <FontAwesomeIcon icon={faYoutube} />
          </Social>
        )}
        {this.props.data.facebook && (
          <Social {...this.props} href={`//www.facebook.com/${this.props.data.facebook}`}>
            <FontAwesomeIcon icon={faFacebookF} />
          </Social>
        )}
        {this.props.data.discord && (
          <Social {...this.props} href={`//www.discord.gg/${this.props.data.discord}`}>
            <FontAwesomeIcon icon={faDiscord} />
          </Social>
        )}
        {this.props.data.donation_link && (
          <Social {...this.props} href={this.props.data.donation_link}>
            <FontAwesomeIcon icon={faDollarSign} />
          </Social>
        )}
        {this.props.data.instagram && (
          <Social {...this.props} href={`//www.instagram.com/${this.props.data.instagram}`}>
            <FontAwesomeIcon icon={faInstagram} />
          </Social>
        )}
        {this.props.data.snapchat && (
          <Social {...this.props} href={`//www.snapchat.com/add/${this.props.data.snapchat}`}>
            <FontAwesomeIcon icon={faSnapchatGhost} />
          </Social>
        )}
        {this.props.data.steam && (
          <Social {...this.props} href={`//www.steamcommunity.com/id/${this.props.data.steam}`}>
            <FontAwesomeIcon icon={faSteam} />
          </Social>
        )}
        {this.props.data.steamgroup && (
          <Social
            {...this.props}
            href={`//www.steamcommunity.com/group/${this.props.data.steamgroup}`}
          >
            <FontAwesomeIcon icon={faSteamSymbol} />
          </Social>
        )}
        {this.props.data.steamtrade && (
          <Social
            {...this.props}
            href={`//steamcommunity.com/tradeoffer/new/?${this.props.data.steamtrade}`}
          >
            <FontAwesomeIcon icon={faSteamSymbol} />
          </Social>
        )}
        {this.props.data.reddit && (
          <Social {...this.props} href={`//www.reddit.com/r/${this.props.data.reddit}`}>
            <FontAwesomeIcon icon={faRedditAlien} />
          </Social>
        )}
        {this.props.data.github && (
          <Social {...this.props} href={`//www.github.com/${this.props.data.github}`}>
            <FontAwesomeIcon icon={faGithub} />
          </Social>
        )}
        {this.props.data.google && (
          <Social {...this.props} href={`//plus.google.com/${this.props.data.google}`}>
            <FontAwesomeIcon icon={faGooglePlus} />
          </Social>
        )}
        {this.props.data.amazon && (
          <Social {...this.props} href={`//www.amazon.com/${this.props.data.amazon}`}>
            <FontAwesomeIcon icon={faAmazon} />
          </Social>
        )}
        {this.props.data.pinterest && (
          <Social {...this.props} href={`//www.pinterest.com/${this.props.data.pinterest}`}>
            <FontAwesomeIcon icon={faPinterest} />
          </Social>
        )}
        {this.props.data.bandcamp && (
          <Social {...this.props} href={`//${this.props.data.bandcamp}.bandcamp.com/`}>
            <FontAwesomeIcon icon={faBandcamp} />
          </Social>
        )}
        {this.props.data.soundcloud && (
          <Social {...this.props} href={`//www.soundcloud.com/${this.props.data.soundcloud}`}>
            <FontAwesomeIcon icon={faSoundcloud} />
          </Social>
        )}
        {this.props.data.spotify && (
          <Social {...this.props} href={`//open.spotify.com/user/${this.props.data.spotify}`}>
            <FontAwesomeIcon icon={faSpotify} />
          </Social>
        )}
        {this.props.data.tumblr && (
          <Social {...this.props} href={`//${this.props.data.tumblr}.tumblr.com`}>
            <FontAwesomeIcon icon={faTumblr} />
          </Social>
        )}
        {this.props.data.flickr && (
          <Social {...this.props} href={`//www.flickr.com/photos/${this.props.data.flickr}`}>
            <FontAwesomeIcon icon={faFlickr} />
          </Social>
        )}
        {this.props.data.linkedin && (
          <Social {...this.props} href={`//www.linkedin.com/in/${this.props.data.linkedin}`}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Social>
        )}
        {this.props.data.extra_link1 && (
          <Social {...this.props} href={this.props.data.extra_link1}>
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
        {this.props.data.extra_link2 && (
          <Social {...this.props} href={this.props.data.extra_link2}>
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
        {this.props.data.extra_link3 && (
          <Social {...this.props} href={this.props.data.extra_link3}>
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
      </SocialItems>
    );
  }
}

export default SocialNetworks;
