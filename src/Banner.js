import React from "react";
import "./Banner.css";
import tresemme from "./tresemme.jpeg";
import leadership from "./leadership.jpg";
import girlboss from "./girlboss.jpg";

class Banner extends React.Component {
  state = {
    photoname: tresemme,
    id: 1,
    caption: "This is the Tresemme event!"
  };
  handleMovePhoto = () => {
    if (this.state.id === 1) {
      this.setState({ photoname: leadership, id: 2, caption: "This is the Leadership event!"  });
    } else if (this.state.id === 2) {
      this.setState({ photoname: girlboss, id: 3, caption: "This is the Girl Boss event!"  });
    } else this.setState({ photoname: tresemme, id: 1, caption: "This is the Tresemme event!" });
    return this.state.photoname;
  };
  handleSelectOne = () => {
    this.setState({ photoname: tresemme, id: 1, caption: "This is the Tresemme event!"});
  };
  handleSelectTwo = () => {
    this.setState({ photoname: leadership, id: 2, caption: "This is the Leadership event!"  });
  };
  handleSelectThree = () => {
    this.setState({ photoname: girlboss, id: 3, caption: "This is the Girl Boss event!"  });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.handleMovePhoto(), 15000);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="Banner">
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
          <br/><br/>
          {this.state.id === 2 ? (
            <p className="Selected" onClick={() => this.handleSelectTwo()}></p>
          ) : (
            <p onClick={() => this.handleSelectTwo()}></p>
          )}
          {this.state.id === 3 ? (
            <p className="Selected" onClick={() => this.handleSelectThree()}></p>
          ) : (
            <p onClick={() => this.handleSelectThree()}></p>
          )}
        </div>
      </div>
    );
  }
}

export default Banner;
