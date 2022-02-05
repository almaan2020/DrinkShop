import React, { createContext, Component } from "react";
import { pull } from "lodash";

export const CartContext = createContext();

class CartContextProvider extends Component {
  state = {
    cartIds: [],
  };

  fillCartIds = () => {
    let cartIds = localStorage.getItem("cartProducts");
    //convert localStorage to array of numbers:
    cartIds = cartIds ? cartIds.split(",").map((item) => parseInt(item)) : [];
    this.setState({ cartIds: cartIds });
  };

  handleCart = (id) => {
    let cartIds = this.state.cartIds;
    if (!cartIds.includes(id)) cartIds.push(id);
    localStorage.removeItem("cartProducts");
    localStorage.setItem("cartProducts", cartIds);
    this.setState({ cartIds: cartIds });
  };

  handleRemoveCart = (id) => {
    let cartIds = this.state.cartIds;
    if (cartIds.includes(id)) pull(cartIds, id);
    localStorage.removeItem("cartProducts");
    localStorage.setItem("cartProducts", cartIds);
    this.setState({ cartIds: cartIds });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          fillCartIds: this.fillCartIds,
          handleCart: this.handleCart,
          handleRemoveCart: this.handleRemoveCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;
