import React, { Component } from 'react';

class SocialNetworks extends Component {
  componentDidMount() {}
  render() {
    const socialColor = {
      color: this.props.data.custom_color,
    };
    return (
      <div className="social-items">
        {this.props.data.twitch_channel && (
          <span>
            <a style={socialColor} href={`//www.twitch.tv/${this.props.data.twitch_channel}`}>
              <i className="fa fa-fw fa-twitch" />
            </a>
          </span>
        )}
        {this.props.data.email && (
          <span>
            <a style={socialColor} href={`mailto:${this.props.data.email}`}>
              <i className="fa fa-fw fa-envelope-o" />
            </a>
          </span>
        )}
        {this.props.data.twitter && (
          <span>
            <a style={socialColor} href={`//www.twitter.com/${this.props.data.twitter}`}>
              <i className="fa fa-fw fa-twitter" />
            </a>
          </span>
        )}
        {this.props.data.facebook && (
          <span>
            <a style={socialColor} href={`//www.facebook.com/${this.props.data.facebook}`}>
              <i className="fa fa-fw fa-facebook" />
            </a>
          </span>
        )}
        {this.props.data.instagram && (
          <span>
            <a style={socialColor} href={`//www.instagram.com/${this.props.data.instagram}`}>
              <i className="fa fa-fw fa-instagram" />
            </a>
          </span>
        )}
        {this.props.data.snapchat && (
          <span>
            <a style={socialColor} href={`//www.snapchat.com/add/${this.props.data.snapchat}`}>
              <i className="fa fa-fw fa-snapchat-ghost" />
            </a>
          </span>
        )}
        {this.props.data.youtube && (
          <span>
            <a style={socialColor} href={`//www.youtube.com/user/${this.props.data.youtube}`}>
              <i className="fa fa-fw fa-youtube-play" />
            </a>
          </span>
        )}
        {this.props.data.steam && (
          <span>
            <a style={socialColor} href={`//www.steamcommunity.com/id/${this.props.data.steam}`}>
              <i className="fa fa-fw fa-steam" />
            </a>
          </span>
        )}
        {this.props.data.steamgroup && (
          <span>
            <a
              style={socialColor}
              href={`//www.steamcommunity.com/group/${this.props.data.steamgroup}`}
            >
              <i className="fa fa-fw fa-steam-square" />
            </a>
          </span>
        )}
        {this.props.data.reddit && (
          <span>
            <a style={socialColor} href={`//www.reddit.com/r/${this.props.data.reddit}`}>
              <i className="fa fa-fw fa-reddit-alien" />
            </a>
          </span>
        )}
        {this.props.data.github && (
          <span>
            <a style={socialColor} href={`//www.github.com/${this.props.data.github}`}>
              <i className="fa fa-fw fa-github" />
            </a>
          </span>
        )}
        {this.props.data.discord && (
          <span>
            <a style={socialColor} href={`//www.discord.gg/${this.props.data.discord}`}>
              <i className="fa fa-fw fa-comment" />
            </a>
          </span>
        )}
        {this.props.data.google && (
          <span>
            <a style={socialColor} href={`//plus.google.com/${this.props.data.google}`}>
              <i className="fa fa-fw fa-google-plus" />
            </a>
          </span>
        )}
        {this.props.data.amazon && (
          <span>
            <a style={socialColor} href={`//www.amazon.com/${this.props.data.amazon}`}>
              <i className="fa fa-fw fa-amazon" />
            </a>
          </span>
        )}
        {this.props.data.pinterest && (
          <span>
            <a style={socialColor} href={`//www.pinterest.com/${this.props.data.pinterest}`}>
              <i className="fa fa-fw fa-pinterest" />
            </a>
          </span>
        )}
        {this.props.data.bandcamp && (
          <span>
            <a style={socialColor} href={`//${this.props.data.bandcamp}.bandcamp.com/`}>
              <i className="fa fa-fw fa-bandcamp" />
            </a>
          </span>
        )}
        {this.props.data.soundcloud && (
          <span>
            <a style={socialColor} href={`//www.soundcloud.com/${this.props.data.soundcloud}`}>
              <i className="fa fa-fw fa-soundcloud" />
            </a>
          </span>
        )}
        {this.props.data.spotify && (
          <span>
            <a style={socialColor} href={`//open.spotify.com/user/${this.props.data.spotify}`}>
              <i className="fa fa-fw fa-spotify" />
            </a>
          </span>
        )}
        {this.props.data.tumblr && (
          <span>
            <a style={socialColor} href={`//${this.props.data.tumblr}.tumblr.com`}>
              <i className="fa fa-fw fa-tumblr" />
            </a>
          </span>
        )}
        {this.props.data.flickr && (
          <span>
            <a style={socialColor} href={`//www.flickr.com/photos/${this.props.data.flickr}`}>
              <i className="fa fa-fw fa-flickr" />
            </a>
          </span>
        )}
        {this.props.data.linkedin && (
          <span>
            <a style={socialColor} href={`//www.linkedin.com/in/${this.props.data.linkedin}`}>
              <i className="fa fa-fw fa-linkedin-square" />
            </a>
          </span>
        )}
      </div>
    );
  }
}

export default SocialNetworks;
