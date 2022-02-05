import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavButton extends Component {
  render() {
    const { destination, badge, tooltip, iconClass, badgeClass } = this.props;
    const showBadge = () => {
      if (badge > 0)
        return <span className={`badge badge-${badgeClass}`}>{badge}</span>;
    };

    return (
      <NavLink
        className="btn btn-outline-light m-1"
        to={destination}
        data-toggle="tooltip"
        data-placement="bottom"
        title={tooltip}
      >
        &nbsp;
        <i className={iconClass}></i>
        &nbsp;
        {showBadge()}
      </NavLink>
    );
  }
}

export default NavButton;
