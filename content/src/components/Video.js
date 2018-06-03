import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import WebCam from "react-webcam";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 60;
    this.state = {
      timer: this.timer,
      muted: true
    };
    this.onPlay = this.onPlay.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      timer: this.state.timer - 1
    });
    if (this.state.timer === -1) {
      clearInterval(this.timerId);
      this.setState({ timer: this.timer });
    }
  }

  onPlay(e) {
    this.timerId = setInterval(() => this.tick(), 1000);
    this.setState({ muted: false });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative" }}>
          <WebCam muted={this.state.muted} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1%",
            left: "1%",
            color: "white",
            fontSize: "300%"
          }}
        >
          {this.state.timer}
        </div>
        <input
          type="button"
          style={{ position: "absolute", bottom: "2%", right: "4%" }}
          className="btn btn-lg btn-success"
          value="Start"
          onClick={this.onPlay}
          hidden={this.state.timer !== this.timer}
        />
      </div>
    );
  }
}

export default Video;
