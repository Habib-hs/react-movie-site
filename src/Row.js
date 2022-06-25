import { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl , isLargeRow}) {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }

  // a snipts of code which run  on a specific condition
  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* sevral row poster */}

        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
			key={movie.id}
            src={`${baseUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}