import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import config from "../../config/config.json";

class CollapseText extends Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    const { text } = this.props;

    if (text.length < config.collapseTextTreshhold)
      return (
        <div>
          <h6>Description:</h6>
          <div className="text-justify">{text}</div>
        </div>
      );

    return (
      <div className="collapse-group">
        <h6>Description:</h6>
        <div className="text-justify">
          {text.split(".")[0]}
          <Collapse in={open}>
            <span id="collapse-text">
              {text.slice(text.split(".")[0].length)}
            </span>
          </Collapse>
          <Link
            to="#"
            onClick={() => this.setState({ open: !open })}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            {open ? "Less..." : "More..."}
          </Link>
        </div>
      </div>
    );
  }
}

export default CollapseText;
