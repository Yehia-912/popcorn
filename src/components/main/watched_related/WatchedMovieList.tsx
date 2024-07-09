import WatchedMovie from "./WatchedMovie";
import { WATCHEDMOVIE } from "../../../interfaces";

interface Iprops {
  watched: WATCHEDMOVIE[];
  onDelete: (val: string) => void;
}
function WatchedMovieList({ onDelete, watched }: Iprops) {
  return (
    <ul className="list list-movies">
      {watched?.map((movie) => (
        <WatchedMovie onDelete={onDelete} key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
