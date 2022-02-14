import React, { useContext } from "react";
import { range } from "lodash";
import { ProductContext } from "../../contexts/ProductContext";
import paginations from "../../config/pagination.json";

const Pagination = () => {
  const { searchParams, handleSearch } = useContext(ProductContext);
  const {
    page: currentPage,
    query: currentQuery,
    sort: currentSort,
    order: currentOrder,
  } = Object.fromEntries([...searchParams]);

  const { countPerPage, allCount } = paginations;
  const itemCounts = currentQuery ? countPerPage : allCount;
  const pageCount = Math.ceil(itemCounts / countPerPage);

  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === Number(currentPage) ? "page-item active" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() =>
                handleSearch(page, currentQuery, currentSort, currentOrder)
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
