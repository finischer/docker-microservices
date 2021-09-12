import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../Api/api";
import Product from "../Components/Product";

export default function ProductPage() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getProductById(id).then((res) => setProduct(res.data));
    };

    fetchData();

    return () => {};
  }, [id]);
  return (
    <>
      <h1>Produkt - {product.product_name} </h1>
      <div className="centered">
        <Product product={product} />
      </div>
      <div className="centered buttons">
        <a href="/product/edit/{{product._id}}" className="btn btn-outlined">
          Bearbeiten
        </a>
        <a href="/product/delete/{{product._id}}" className="btn btn-outlined">
          Produkt entfernen
        </a>
      </div>
    </>
  );
}
