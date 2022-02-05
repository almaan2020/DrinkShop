import React, { useContext } from "react";
import { orderBy } from "lodash";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./Product";

const ProductList = () => {
  const { products, sortData } = useContext(ProductContext);

  const getSorted = () => {
    const sorted = orderBy(products, [sortData.path], [sortData.order]);
    return sorted;
  };

  return (
    <div className="row">
      {getSorted().map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
