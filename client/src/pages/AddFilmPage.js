import React, { useState } from "react";
import { addFilm } from "../Api/filmapi";

export default function AddFilmPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [movie, setMovie] = useState({
    name: "",
    rating: "",
    year: ""
  })
  const [message, setMessage] = useState({
    msg: "",
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const film = {
      film_name: name,
      rating: rating,
      year: year,
    };

    await addFilm(film).then(() => {
      setMessage({
        msg: film.film_name,
        success: true,
      });
      setName("");
      setRating("");
      setYear("");
    });
  };

  return (
    <div>
      <h1>Film hinzufügen</h1>
      {message.success && (
        <h4 className="success">
          Der Film {message.msg} wurde erfolgreich hinzugefügt!
        </h4>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <input
            className="input"
            value={name}
            type="text"
            placeholder="Titel"
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </p>
        <p>
          <input
            className="input"
            value={rating}
            type="number"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            autoFocus
          />
        </p>
        <p>
          <input
            className="input"
            value={year}
            type="number"
            placeholder="Erscheinungsjahr"
            onChange={(e) => setYear(e.target.value)}
            autoFocus
          />
        </p>
        <p>
          <button className="btn btn-contained" type="submit">
            Film hinzufügen
          </button>
        </p>
      </form>
    </div>
  );
}
