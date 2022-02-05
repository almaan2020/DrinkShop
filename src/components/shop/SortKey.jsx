import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import sortIcon from "../../config/sortIcon.json";

const SortKey = (props) => {
  const { path } = props;
  const { sortData, handleSort } = useContext(ProductContext);

  const { colorClass, ascClass, descClass } = sortIcon;

  const renderSortIcon = () => {
    if (path !== sortData.path) return null;
    if (sortData.order === "asc") return ascClass;
    return descClass;
  };

  const raiseSort = (path, sortData) => {
    const sortDt = { ...sortData };
    if (sortDt.path === path) {
      sortDt.order = sortDt.order === "asc" ? "desc" : "asc";
    } else {
      sortDt.path = path;
      sortDt.order = "asc";
    }
    handleSort(sortDt);
  };

  return (
    <span
      onClick={() => raiseSort(path, sortData)}
      style={{ cursor: "pointer" }}
    >
      {path}&nbsp;
      <i className={`${colorClass} ${renderSortIcon()}`}></i>
      <span>&nbsp;&nbsp;</span>
    </span>
  );
};

export default SortKey;
