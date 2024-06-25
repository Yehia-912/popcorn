import { useState } from "react";
import Movie from "./Movie";
import { MOVIE } from "../../../interfaces";

interface Iprops {
  movies: MOVIE[]
}

function MovieList({ movies }:Iprops) {


  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;