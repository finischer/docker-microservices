import axios from "axios";
import { resolve } from "../utils/resolve";

const BASE = "http://localhost:5000";

const instance = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": "application/json" },
});

export async function getProducts() {
  return await resolve(
    instance.get("/api/products").then((res) => res.data.products)
  );
}

export async function getProductById(product_id) {
  return await resolve(
    instance.get(`/api/product/${product_id}`).then((res) => res.data)
  );
}

export async function deleteProductById(product_id) {
  return await resolve(
    instance.delete(`/api/product/${product_id}`).then((res) => res.data)
  );
}

export async function updateProductById(product_id, product) {
  return await resolve(
    instance.put(`/api/product/${product_id}`, product).then((res) => res.data)
  );
}

export async function addProduct(product) {
  return await resolve(
    instance.post("/api/product/add", product).then((res) => res)
  );
}
