import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import {
  deleteFilmById,
  getFilmById,
  updateFilmById,
} from "../Api/filmapi";
import Film from "../components/FilmManagement/Film";

export default function FilmPage() {
  const [film, setFilm] = useState({});
  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await getFilmById(id).then((res) => setFilm(res.data));
    };

    fetchData();
    return () => {};
  }, [id]);

  const handleDeleteProduct = async () => {
    await deleteFilmById(id).then(() => {
      window.alert("Film wurde erfolgreich entfernt!");
      history.push("/movies");
      window.location.reload();
    });
  };

  const handleUpdateProduct = async (id, film) => {
    await updateFilmById(id, film).then(() => {
      window.alert("Film wurde erfolgreich geändert!");
      window.location.reload();
    });
  };

  if (editMode) {
    return (
      <>
        <div className="centered">
          <div className="content">
            <h1>Produkt - {film.film_name} </h1>
            <div className="product-block">
              <Film
                film={film}
                editMode
                setFilm={setFilm}
                filmName={film.film_name}
                filmRating={film.rating}
                filmYear={film.year}
              />
            </div>

            <div className="buttons">
              <button
                className="btn btn-contained"
                onClick={() => handleUpdateProduct(id, film)}
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
            <h1>Produkt - {film.film_name} </h1>
            <div className="product-block">
              <Film film={film} />
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
