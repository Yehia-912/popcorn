import MovieList from "./movie_list/MovieList";
import WatchedRelated from "./watched_related/WatchedRelated";
import { MOVIE } from "../../interfaces";

interface Iprops {
  movies:MOVIE[]
}
function Main({ movies }:Iprops) {

  return (
    <main className="main">
      <MovieList movies={movies} />
      <WatchedRelated />
    </main>
  );
}

export default Main;
