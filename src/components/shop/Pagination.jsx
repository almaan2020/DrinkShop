import React, { useContext } from "react";
import { range } from "lodash";
import { ProductContext } from "../../contexts/ProductContext";
import paginations from "../../config/pagination.json";

const Pagination = () => {
  const { currentPage, handlePage, query } = useContext(ProductContext);
  const { countPerPage, allCount } = paginations;

  const itemCounts = query ? countPerPage : allCount;
  const pageCount = Math.ceil(itemCounts / countPerPage);

  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => handlePage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
