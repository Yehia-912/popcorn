import { WATCHEDMOVIE } from "../../../interfaces";
interface Iprops {
  movie: WATCHEDMOVIE;
  onDelete: (val: string) => void;
}
function WatchedMovie({ onDelete, movie }: Iprops) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
          x
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
