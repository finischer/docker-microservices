import React, { useEffect, useState } from "react";

// CSS
import "../css/products.css";
import { getMovies } from "../Api/filmapi";
import FilmList from "../components/FilmManagement/Movies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getMovies().then((res) => {
        setMovies(res.data);
        setLoading(false);
      });
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div className="produkte">
      <h1>Filme</h1>
      {loading ? <h4>Loading...</h4> : <FilmList filmList={movies} />}
    </div>
  );
}
