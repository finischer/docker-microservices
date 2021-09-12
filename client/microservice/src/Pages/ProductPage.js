import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import {
  deleteProductById,
  getProductById,
  updateProductById,
} from "../Api/api";
import Product from "../Components/Product";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await getProductById(id).then((res) => setProduct(res.data));
    };

    fetchData();
    return () => {};
  }, [id]);

  const handleDeleteProduct = async () => {
    await deleteProductById(id).then(() => {
      window.alert("Produkt wurde erfolgreich entfernt!");
      history.push("/products");
      window.location.reload();
    });
  };

  const handleUpdateProduct = async (id, product) => {
    await updateProductById(id, product).then(() => {
      window.alert("Produkte wurde erfolgreich geändert!");
      window.location.reload();
    });
  };

  if (editMode) {
    return (
      <>
        <div className="centered">
          <div className="content">
            <h1>Produkt - {product.product_name} </h1>
            <div className="product-block">
              <Product
                product={product}
                editMode
                setProduct={setProduct}
                productName={product.product_name}
              />
            </div>

            <div className="buttons">
              <button
                className="btn btn-contained"
                onClick={() => handleUpdateProduct(id, product)}
              >
                Speichern
              </button>
              <button
                className="btn btn-outlined"
                onClick={() => setEditMode(false)}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="centered">
          <div className="content">
            <h1>Produkt - {product.product_name} </h1>
            <div className="product-block">
              <Product product={product} />
            </div>
            <div className="buttons">
              <button
                className="btn btn-outlined"
                onClick={() => setEditMode(true)}
              >
                Bearbeiten
              </button>
              <button
                className="btn btn-outlined"
                onClick={() => handleDeleteProduct()}
              >
                Produkt entfernen
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
