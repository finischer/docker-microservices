import React, { useEffect, useState } from "react";

// CSS
import "../css/products.css";
import { getProducts } from "../Api/api";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getProducts().then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div className="produkte">
      <h1>Produkte</h1>
      {loading ? <h4>Loading...</h4> : <ProductList productList={products} />}
    </div>
  );
}
