import React from "react";

// CSS
import "../../css/product.css";

export default function Film({
  film,
  editMode = false,
  className = null,
  setFilm,
  filmName,
  filmRating,
  filmYear
}) {
  const film_name_field = editMode ? (
    <input
      className="input-edit"
      type="text"
      value={filmName}
      onChange={(e) => setFilm({ ...film, film_name: e.target.value })}
    />
  ) : (
    film.film_name
  );
  const film_rating_field = editMode ? (
    <input
      className="input-edit"
      type="number"
      value={filmRating}
      onChange={(e) => setFilm({ ...film, rating: e.target.value })}
    />
  ) : (
    film.rating
  );
  const film_year_field = editMode ? (
    <input
      className="input-edit"
      type="number"
      value={filmYear}
      onChange={(e) => setFilm({ ...film, year: e.target.value })}
    />
  ) : (
    film.year
  );

  return (
    <ul>
      <li className={`product ${!editMode && className && "product-hover"}`}>
        <p> Titel: {film_name_field} </p>
        <p> Rating: {film_rating_field} </p>
        <p> Erscheinungsjahr: {film_year_field}</p>
      </li>
    </ul>
  );
}
