import axios from "axios";
import { resolve } from "../utils/resolve";

const BASE = "http://localhost:5001";

const instance = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": "application/json" },
});

export async function getMovies() {
  return await resolve(
    instance.get("/api/movies").then((res) => res.data.movies)
  );
}

export async function getFilmById(film_id) {
  return await resolve(
    instance.get(`/api/film/${film_id}`).then((res) => res.data)
  );
}

export async function deleteFilmById(film_id) {
  return await resolve(
    instance.delete(`/api/film/${film_id}`).then((res) => res.data)
  );
}

export async function updateFilmById(film_id, film) {
  return await resolve(
    instance.put(`/api/film/${film_id}`, film).then((res) => res.data)
  );
}

export async function addFilm(film) {
  return await resolve(
    instance.post("/api/film/add", film).then((res) => res)
  );
}
