import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const movies = {
  1: { title: "Inception", time: "148min", genres: ["Action", "Sci-Fi"] },
  2: { title: "The Shawshank Redemption", time: "142min", genres: ["Drama"] }
};

function Movie() {
  const { id } = useParams();
  const movie = movies[id] || { title: "Movie not found", time: "N/A", genres: [] };

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;