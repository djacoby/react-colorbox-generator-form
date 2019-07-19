import React, { Component } from "react";
import "./NewBoxForm.css";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <div className="NewBoxForm">
        <div>
          <h1>Box Generator</h1>
        </div>
        <div className="NewBoxForm-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                name="height"
                value={this.state.height}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                name="width"
                value={this.state.width}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                id="color"
                name="color"
                value={this.state.color}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary">Generate!</button>
          </form>
        </div>
      </div>
    );
  }
}
