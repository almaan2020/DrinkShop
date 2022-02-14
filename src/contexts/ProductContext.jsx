import React, { createContext, useState, useCallback } from "react";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import { getProducts } from "../services/productService";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams({
    page: 1,
    query: "",
    sort: "name",
    order: "asc",
  });

  const fillProducts = useCallback(async () => {
    const { page, query } = Object.fromEntries([...searchParams]);
    const { data } = await getProducts(page, query);
    setProducts([...data]);
  }, [searchParams]);

  const handleSearch = (page, query, sort, order) => {
    const params = { page, query, sort, order };
    navigate(`?${createSearchParams(params)}`);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        searchParams,
        fillProducts,
        handleSearch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
