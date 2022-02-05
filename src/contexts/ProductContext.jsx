import React, { createContext, Component } from "react";
import { getProducts } from "../services/productService";

export const ProductContext = createContext();

class ProductContextProvider extends Component {
  state = {
    products: [],
    currentPage: 1,
    query: null,
    sortData: { path: "name", order: "asc" },
  };

  fillProducts = async () => {
    const { currentPage, query } = this.state;
    const { data } = await getProducts(currentPage, query);
    this.setState({ products: data });
  };

  handleFilter = async (query) => {
    const { data } = await getProducts(1, query);
    this.setState({ products: data, query: query, currentPage: 1 });
  };

  handlePage = async (page) => {
    const { data } = await getProducts(page, null);
    this.setState({ products: data, query: null, currentPage: page });
  };

  handleSort = (sortData) => {
    this.setState({ sortData: sortData });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          fillProducts: this.fillProducts,
          handleFilter: this.handleFilter,
          handlePage: this.handlePage,
          handleSort: this.handleSort,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductContextProvider;
