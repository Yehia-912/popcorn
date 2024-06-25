import WatchedMovie from "./WatchedMovie";

/* eslint-disable react/prop-types */
function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
