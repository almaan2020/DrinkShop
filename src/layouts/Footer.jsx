import React, { Component } from "react";
import footer from "../config/footer.json";

class Footer extends Component {
  render() {
    const { style, copyRightText, backgroundColor } = footer;
    return (
      <footer>
        <div
          className={`container-fluid text-center bg-${backgroundColor}`}
          style={style}
        >
          <span className="text-center font-weight-light">
            &copy;{copyRightText}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
