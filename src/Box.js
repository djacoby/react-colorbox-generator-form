import React, { Component } from "react";
import "./Box.css";
export default class Box extends Component {
  render() {
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
  }
}
