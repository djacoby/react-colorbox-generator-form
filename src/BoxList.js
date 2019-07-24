import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
  }

  addBox(newBox) {
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        color={box.color}
        height={box.height}
        width={box.width}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        <div className="BoxList-boxes">{boxes}</div>
      </div>
    );
  }
}
