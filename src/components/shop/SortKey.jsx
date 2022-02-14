import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import sortIcon from "../../config/sortIcon.json";

const SortKey = (props) => {
  const { path } = props;
  const { searchParams, handleSearch } = useContext(ProductContext);

  const { colorClass, ascClass, descClass } = sortIcon;
  const {
    page: currentPage,
    query: currentQuery,
    sort: currentSort,
    order: currentOrder,
  } = Object.fromEntries([...searchParams]);

  const renderSortIcon = () => {
    if (path !== currentSort) return null;
    if (currentOrder === "asc") return ascClass;
    return descClass;
  };

  const raiseSort = (path, sort, order) => {
    if (sort === path) {
      order = order === "asc" ? "desc" : "asc";
    } else {
      sort = path;
      order = "asc";
    }
    handleSearch(currentPage, currentQuery, sort, order);
  };

  return (
    <span
      onClick={() => raiseSort(path, currentSort, currentOrder)}
      style={{ cursor: "pointer" }}
    >
      {path}&nbsp;
      <i className={`${colorClass} ${renderSortIcon()}`}></i>
      <span>&nbsp;&nbsp;</span>
    </span>
  );
};

export default SortKey;
