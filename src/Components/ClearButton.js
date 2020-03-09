import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return (
      <div className="Clear-btn" onClick={() => this.props.handleClear()}>
        Clear
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
