import { MOVIE } from "../../../interfaces";
import Movie from "./Movie";

interface Props {
  movies: MOVIE[];
}
export default function MovieList({ movies }: Props) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
