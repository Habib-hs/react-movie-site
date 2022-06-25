import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));

      // movieTrailer(null, { tmdbId: movie.id })
      //   .then((url) => {
      //     console.log("url is " + url);
      //     const urlParams = new URLSearchParams(new URL(url).search);
      //     console.log("urlParamsn" + urlParams);
      //     setTrailerUrl(urlParams.get("v"));
      //   })
      //   .catch((error) => console.log(error));
    }
  };

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
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
