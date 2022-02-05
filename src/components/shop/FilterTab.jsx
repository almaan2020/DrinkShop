import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { NavLink } from "react-router-dom";
import filters from "../../config/filters.json";

const FilterTab = (props) => {
  const { filter, label } = props;
  const { query, handleFilter } = useContext(ProductContext);

  const { colors } = filters;

  const getStyleClass = (filter) => {
    return query === filter
      ? `nav-link active ${colors.activeColorClass}`
      : `nav-link ${colors.colorClass}`;
  };

  return (
    <li className="nav-item" onClick={() => handleFilter(filter)}>
      <NavLink className={getStyleClass(filter)} to="#">
        {label}
      </NavLink>
    </li>
  );
};

export default FilterTab;
