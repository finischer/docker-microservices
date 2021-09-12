import React from "react";

// CSS
import "../css/product.css";

export default function Product({ product }) {
  return (
    <ul>
      <li className="product product-hover">
        <p> Produkt-ID: {product._id}</p>
        <p> Name: {product.product_name} </p>
        <p> Hinzugefügt am: {product.hinzugefuegt} </p>
      </li>
    </ul>
  );
}
