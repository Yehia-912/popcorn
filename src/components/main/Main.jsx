/* eslint-disable react/prop-types */
import MovieList from "./movie_list/MovieList";
import WatchedRelated from "./watched_related/WatchedRelated";

function Main({ movies }) {
  return (
    <main className="main">
      <MovieList movies={movies} />
      <WatchedRelated />
    </main>
  );
}

export default Main;
