import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import NavButton from "../components/common/NavButton";
import navMenu from "../config/navMenu.json";

const Navbar = (props) => {
  const { brand, color } = props;
  const { cartIds } = useContext(CartContext);

  const navBtns = [
    {
      id: 1,
      destination: "/favorites",
      tooltip: "favorites",
      badge: null,
      iconClass: "fa fa-star",
      badgeClass: null,
    },
    {
      id: 2,
      destination: "/cart",
      badge: cartIds.length,
      tooltip: "cart",
      iconClass: "fa fa-shopping-cart",
      badgeClass: "danger",
    },
  ];

  return (
    <nav
      className={`navbar sticky-top navbar-expand navbar-${color} bg-${color} mb-4`}
    >
      <Link className="navbar-brand ml-2" to="/shop">
        {brand}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {navMenu.map((nm) => (
            <li key={nm.id} className="nav-item">
              <NavLink className="nav-link" to={nm.itemDestination}>
                {nm.itemLabel}
              </NavLink>
            </li>
          ))}
        </ul>
        <form className="form-inline">
          {navBtns.map((nb) => (
            <NavButton
              key={nb.id}
              destination={nb.destination}
              badge={nb.badge}
              tooltip={nb.tooltip}
              iconClass={nb.iconClass}
              badgeClass={nb.badgeClass}
            />
          ))}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
