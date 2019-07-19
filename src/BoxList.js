import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v4";
import "./BoxList.css";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
  }

  addBox(box) {
    let newBox = { ...box };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  renderBoxes() {
    return this.state.boxes.map(box => (
      <Box
        key={uuid()}
        color={box.color}
        height={box.height}
        width={box.width}
      />
    ));
  }

  render() {
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        <div className="BoxList-boxes">{this.renderBoxes()}</div>
      </div>
    );
  }
}
