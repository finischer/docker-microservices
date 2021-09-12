import React, { useState } from "react";
import { addProduct } from "../Api/api";

export default function AddProductPage() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    const product = {
      product_name: name,
    };

    await addProduct(product).then((res) => console.log(res));
    e.preventDefault();
  };

  return (
    <div>
      <h1>Produkt hinzufügen</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
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
