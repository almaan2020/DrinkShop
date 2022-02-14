import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { FavContext } from "../contexts/FavoriteContext";
import { CartContext } from "../contexts/CartContext";
import ScrollToTop from "react-scroll-to-top";
import Pagination from "../components/shop/Pagination";
import FilterBar from "../components/shop/FilterBar";
import SortBar from "../components/shop/SortBar";
import ProductList from "../components/shop/ProductList";
import PageTitle from "../layouts/PageTitle";
import titles from "../config/titles.json";

const Shop = () => {
  const { products, fillProducts } = useContext(ProductContext);
  const { fillFavIds } = useContext(FavContext);
  const { fillCartIds } = useContext(CartContext);
  const { emptyMsg } = titles.shopTitles;

  useEffect(() => {
    fillProducts();
  }, [fillProducts]);

  useEffect(() => {
    fillFavIds();
  }, [fillFavIds]);

  useEffect(() => {
    fillCartIds();
  }, [fillCartIds]);

  if (products.length === 0)
    return (
      <div className="row d-block text-center">
        <p>{emptyMsg}</p>
      </div>
    );

  return (
    <div className="row pt-4 d-block">
      <PageTitle title="Our Beers" />
      <div className="row mt-4 ">
        <div className="col-md-2"></div>
        <div className="d-flex col-md-8 p-2 bg-light justify-content-around">
          <FilterBar />
          <SortBar />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <ProductList />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row my-2">
        <div className="col-md-2"></div>
        <div className="d-flex col-md-8 p-2 justify-content-center">
          <Pagination />
        </div>
        <div className="col-md-2">
          <ScrollToTop smooth />
        </div>
      </div>
    </div>
  );
};

export default Shop;
