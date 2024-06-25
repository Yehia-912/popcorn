import WatchedMovie from "./WatchedMovie";
import { WATCHEDMOVIE } from "../../../interfaces";

 interface Iprops  {
  watched: WATCHEDMOVIE[]
}
function WatchedMovieList({ watched }:Iprops) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
