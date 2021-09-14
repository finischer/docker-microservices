import React, { useState } from "react";
import { addProduct } from "../Api/api";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState({
    msg: "",
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      product_name: name,
    };

    await addProduct(product).then(() => {
      setMessage({
        msg: product.product_name,
        success: true,
      });
      setName("");
    });
  };

  return (
    <div>
      <h1>Produkt hinzufügen</h1>
      {message.success && (
        <h4 className="success">
          Produkt {message.msg} wurde erfolgreich hinzugefügt!
        </h4>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <input
            className="input"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </p>
        <p>
          <button className="btn btn-contained" type="submit">
            Produkt hinzufügen
          </button>
        </p>
      </form>
    </div>
  );
}
