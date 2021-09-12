import axios from "axios";
import { resolve } from "../utils/resolve";

const BASE = "http://192.168.0.108:5000";

const instance = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": "application/json" },
});

export async function getProducts() {
  return await resolve(
    instance.get(BASE + "/api/products").then((res) => res.data.products)
  );
}

export async function getProductById(product_id) {
  return await resolve(
    instance.get(BASE + `/api/product/${product_id}`).then((res) => res.data)
  );
}

export async function addProduct(product) {
  return await resolve(
    instance.post(BASE + "/api/product/add", product).then((res) => res)
  );
}