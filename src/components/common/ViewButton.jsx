import React, { Component } from "react";

class ViewButton extends Component {
  render() {
    const { onView, iconClass } = this.props;
    return <i onClick={onView} className={iconClass} aria-hidden="true"></i>;
  }
}

export default ViewButton;
