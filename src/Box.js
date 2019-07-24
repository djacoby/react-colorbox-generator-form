import React, { Component } from "react";
import "./Box.css";
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              key: `${this.props.id}`,
              backgroundColor: `${this.props.color}`,
              height: `${this.props.height}rem`,
              width: `${this.props.width}rem`
            }}
          />
          <button className="btn btn-danger" onClick={this.props.removeBox}>
            Remove Box
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}
