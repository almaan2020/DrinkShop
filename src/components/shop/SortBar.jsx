import React, { Component } from "react";
import SortKey from "./SortKey";
import sortIcon from "../../config/sortIcon.json";

class SortBar extends Component {
  render() {
    const { path } = sortIcon;
    return (
      <div className="d-flex align-items-center text-secondary">
        {path.map((path) => (
          <SortKey key={path.id} path={path.value} />
        ))}
      </div>
    );
  }
}

export default SortBar;
