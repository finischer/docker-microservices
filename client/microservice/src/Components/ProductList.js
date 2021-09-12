import React from "react";
import Product from "./Product";

export default function ProductList({ productList }) {
  if (productList.length === 0) {
    return <h4>Keine Produkte verfügbar!</h4>;
  } else {
    return (
      <>
        {productList.map((product) => (
          <a key={product._id} href={`/product/${product._id}`}>
            <Product product={product} class="product-hover" />
          </a>
        ))}
      </>
    );
  }
}
