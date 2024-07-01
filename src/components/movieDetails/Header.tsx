interface Props {
  Poster: string;
  onDeSelect: () => void;
  Title: string;
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

function Header({
  Poster,
  onDeSelect,
  Title,
  Released,
  Runtime,
  Genre,
  imdbRating,
}: Props) {
  return (
    <header>
      <button className="btn-back" onClick={() => onDeSelect()}>
        &larr;
      </button>
      <img src={Poster} alt={`poster of ${Title}`} />
      <div className="details-overview">
        <h2>{Title}</h2>
        <p>
          {Released} &bull; {Runtime}
        </p>
        <p>{Genre}</p>
        <p>
          <span>⭐</span>
          {imdbRating} IMDB rating
        </p>
      </div>
    </header>
  );
}
export default Header;
