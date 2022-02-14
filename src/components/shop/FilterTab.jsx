import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { NavLink } from "react-router-dom";
import filters from "../../config/filters.json";

const FilterTab = (props) => {
  const { filter, label } = props;
  const { searchParams, handleSearch } = useContext(ProductContext);
  const {
    query: currentQuery,
    sort: currentSort,
    order: currentOrder,
  } = Object.fromEntries([...searchParams]);

  const { colors } = filters;

  const getStyleClass = (filter) => {
    return currentQuery === filter
      ? `nav-link active ${colors.activeColorClass}`
      : `nav-link ${colors.colorClass}`;
  };

  return (
    <li
      className="nav-item"
      onClick={() => handleSearch(1, filter, currentSort, currentOrder)}
    >
      <NavLink className={getStyleClass(filter)} to="#">
        {label}
      </NavLink>
    </li>
  );
};

export default FilterTab;
