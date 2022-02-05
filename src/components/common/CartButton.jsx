import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";

const CartButton = (props) => {
  const { handleCart } = useContext(CartContext);
  const { id } = props;

  return (
    <Button
      className="btn-block"
      variant="danger"
      onClick={() => handleCart(id)}
    >
      <i className="fa fa-cart-plus"></i>&nbsp;Add to Cart
    </Button>
  );
};

export default CartButton;
