import { useEffect, useState } from "react";
import { WATCHEDMOVIE, fullMovieDetails } from "../../interfaces";
import { initfullDetails } from "../../data";
import Header from "./Header";
import MovieDesc from "./MovieDesc";
import Loader from "../ui/Loader";
import { handleFetching } from "../../functions";
import Error from "../ui/Errors";
import StartRating from "../ui/StartRating";
import Button from "../ui/Button";

interface Props {
  onDeSelect: () => void;
  onAddToWatch: (val: WATCHEDMOVIE) => void;
  selectedID: string;
}

function MovieDetails({ onAddToWatch, onDeSelect, selectedID }: Props) {
  const [movieFullDetails, setMovieFullDetails] =
    useState<fullMovieDetails>(initfullDetails);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userRating, setUserRating] = useState(0);
  //  Destructure

  const {
    Year,
    imdbID,
    Poster,
    Released,
    Title,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Actors,
    Director,
  } = movieFullDetails;

  //Handlers
  const handleSetRating = (rate: number) => setUserRating(rate);
  const handleAdd = () => {
    onAddToWatch(newWatchedMovie);
    onDeSelect();
  };

  const newWatchedMovie: WATCHEDMOVIE = {
    imdbID,
    imdbRating: Number(imdbRating),
    Poster,
    Runtime: Number(Runtime.split(" ")[0]),
    Title,
    userRating,
    Year,
  };

  useEffect(() => {
    handleFetching<fullMovieDetails>({
      query: selectedID,
      setError,
      setIsLoading,
      setQueryResult: setMovieFullDetails,
      withTitle: false,
    });
  }, [selectedID]);

  return (
    <div className="details">
      {error && !isLoading && <Error>{error}</Error>}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <Header
            Genre={Genre}
            Poster={Poster}
            Released={Released}
            Runtime={Runtime}
            Title={Title}
            imdbRating={imdbRating}
            onDeSelect={onDeSelect}
          />
          <MovieDesc Actors={Actors} Director={Director} Plot={Plot}>
            <StartRating startNum={10} size={24} onGetRate={handleSetRating} />
            {userRating ? (
              <Button className="btn-add" onClick={handleAdd}>
                + Add to list
              </Button>
            ) : null}
          </MovieDesc>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
