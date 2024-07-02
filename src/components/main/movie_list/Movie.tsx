import { MOVIE } from "../../../interfaces";

interface Iprops {
  movie: MOVIE;
  onSelect: (val: string) => void;
}
function Movie({ onSelect, movie }: Iprops) {
  const { Poster, Title, Year, imdbID } = movie;

  
    return (
    <li onClick={() => onSelect(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
