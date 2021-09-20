import React from "react";

// CSS
import "../../css/product.css";

export default function Product({
  product,
  editMode = false,
  className = null,
  setProduct,
  productName,
}) {
  const product_name_field = editMode ? (
    <input
      className="input-edit"
      type="text"
      value={productName}
      onChange={(e) => setProduct({ ...product, product_name: e.target.value })}
    />
  ) : (
    product.product_name
  );

  return (
    <ul>
      <li className={`product ${!editMode && className && "product-hover"}`}>
        <p> Produkt-ID: {product._id}</p>
        <p> Name: {product_name_field} </p>
        <p> Hinzugefügt am: {product.hinzugefuegt} </p>
      </li>
    </ul>
  );
}
