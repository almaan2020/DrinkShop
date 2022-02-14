import React, { useContext } from "react";
import { orderBy } from "lodash";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./Product";

const ProductList = () => {
  const { products, searchParams } = useContext(ProductContext);
  const { sort: currentSort, order: currentOrder } = Object.fromEntries([
    ...searchParams,
  ]);

  const getSorted = () => {
    const sorted = orderBy(products, currentSort, currentOrder);
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
