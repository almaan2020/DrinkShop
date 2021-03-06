import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sum } from "lodash";
import { getMapProducts } from "../services/productService";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/cartList/CartItem";
import PageTitle from "../layouts/PageTitle";
import titles from "../config/titles.json";
import toasts from "../config/toast.json";

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cartIds, fillCartIds, handleRemoveCart } = useContext(CartContext);
  const { summary, total } = titles.cartTitles;
  const { cartToast } = toasts;

  useEffect(() => {
    fillCartIds();
  }, [fillCartIds]);

  useEffect(() => {
    getMapProducts(cartIds, setCartProducts);
  }, [cartIds]);

  return (
    <div className="row pt-4 d-block">
      <PageTitle title="Cart" />
      <div className="row mt-4">
        <div className="col-3">
          <div className="cart-sidebar">
            <h5>{summary}</h5>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <h6>{`${total}:`}</h6>
              <h6>{`$${
                cartProducts ? sum(cartProducts.map((p) => p[0].srm)) : 0
              }`}</h6>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {cartProducts &&
              cartProducts.map((p) => (
                <CartItem
                  key={p[0].id}
                  id={p[0].id}
                  name={p[0].name}
                  image_url={p[0].image_url}
                  srm={p[0].srm}
                  handleRemoveCart={handleRemoveCart}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="d-none">
        {cartIds.length === 0 ? toast(cartToast) : null}
      </div>
      <br></br>
    </div>
  );
};

export default CartList;
