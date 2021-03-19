import React from "react";
import "./Banner.css";
import tresemme from "./tresemme.jpeg";
import leadership from "./leadership.jpg";
import girlboss from "./girlboss.jpg";

class Banner extends React.Component {
  state = {
    photoname: tresemme,
    id: 1,
    caption:
      "Assisted in launch of TRESemmé’s pledge at New York Fashion Week to help close the gender leadership gap. Responsibilities included writing a national press release, managing media attendees’ experience on-site, and facilitating interviews between media and TRESemmé spokespeople on-the-ground.",
  };
  handleMovePhoto = () => {
    if (this.state.id === 1) {
      this.setState({
        photoname: leadership,
        id: 2,
        caption:
          "Planned and executed TRESemmé’s three-day entrepreneurial leadership incubator event in NYC. Responsibilities included collaborating with nonprofit partner Vital Voices, crafting all event signage, overseeing event production, and developing talking points for TRESemmé’ spokesperson’s welcoming speech.",
      });
    } else if (this.state.id === 2) {
      this.setState({
        photoname: girlboss,
        id: 3,
        caption:
          "Planned and executed TRESemmé’s sponsorship of the Girlboss conference in Los Angeles. Responsibilities included crafting invites for media, managing media attendees’ experience on-site, and developing talking points for TRESemmé spokesperson’s panel  event. ",
      });
    } else
      this.setState({
        photoname: tresemme,
        id: 1,
        caption:
          "Assisted in launch of TRESemmé’s pledge at New York Fashion Week to help close the gender leadership gap. Responsibilities included writing a national press release, managing media attendees’ experience on-site, and facilitating interviews between media and TRESemmé spokespeople on-the-ground.",
      });
    return this.state.photoname;
  };
  handleSelectOne = () => {
    this.setState({
      photoname: tresemme,
      id: 1,
      caption:
        "Assisted in launch of TRESemmé’s pledge at New York Fashion Week to help close the gender leadership gap. Responsibilities included writing a national press release, managing media attendees’ experience on-site, and facilitating interviews between media and TRESemmé spokespeople on-the-ground.",
    });
  };
  handleSelectTwo = () => {
    this.setState({
      photoname: leadership,
      id: 2,
      caption:
        "Planned and executed TRESemmé’s three-day entrepreneurial leadership incubator event in NYC. Responsibilities included collaborating with nonprofit partner Vital Voices, crafting all event signage, overseeing event production, and developing talking points for TRESemmé’ spokesperson’s welcoming speech.",
    });
  };
  handleSelectThree = () => {
    this.setState({
      photoname: girlboss,
      id: 3,
      caption:
        "Planned and executed TRESemmé’s sponsorship of the Girlboss conference in Los Angeles. Responsibilities included crafting invites for media, managing media attendees’ experience on-site, and developing talking points for TRESemmé spokesperson’s panel  event. ",
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.handleMovePhoto(), 16000);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="Banner">
        <h1>Career Highlights</h1>
        <div>
          <img src={this.state.photoname} alt="work-event" />
        </div>
        <p>{this.state.caption}</p>
        <br />
        <div className="Dots">
          {this.state.id === 1 ? (
            <p className="Selected" onClick={() => this.handleSelectOne()}></p>
          ) : (
            <p onClick={() => this.handleSelectOne()}></p>
          )}
          <br />
          <br />
          {this.state.id === 2 ? (
            <p className="Selected" onClick={() => this.handleSelectTwo()}></p>
          ) : (
            <p onClick={() => this.handleSelectTwo()}></p>
          )}
          {this.state.id === 3 ? (
            <p
              className="Selected"
              onClick={() => this.handleSelectThree()}
            ></p>
          ) : (
            <p onClick={() => this.handleSelectThree()}></p>
          )}
        </div>
      </div>
    );
  }
}

export default Banner;
