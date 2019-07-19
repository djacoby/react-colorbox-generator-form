import React, { Component } from "react";
import "./Box.css";
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.id,
      color: this.props.color,
      height: this.props.height,
      width: this.props.width,
      visible: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      visible: false
    }));
  }

  render() {
    if (this.state.visible === true) {
      return (
        <div className="Box">
          <div
            style={{
              key: `${this.state.id}`,
              backgroundColor: `${this.state.color}`,
              height: `${this.state.height}rem`,
              width: `${this.state.width}rem`
            }}
          />
          <button className="btn btn-danger" onClick={this.handleClick}>
            Remove Box
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}
