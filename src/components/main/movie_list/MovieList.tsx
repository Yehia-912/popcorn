import { MOVIE } from "../../../interfaces";
import Movie from "./Movie";

interface Props {
  movies: MOVIE[];
  onSelect: (val: string) => void;
}
export default function MovieList({ onSelect, movies }: Props) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} onSelect={onSelect} movie={movie} />
      ))}
    </ul>
  );
}
