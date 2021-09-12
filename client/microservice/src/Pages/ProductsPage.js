import React, { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setProducts(data.results));

    return () => {};
  }, []);

  return <div> </div>;
}
