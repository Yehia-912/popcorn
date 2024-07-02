import Box from "./components/layout/Box";
import Main from "./components/main/Main";
import MovieList from "./components/main/movie_list/MovieList";
import WatchedMovieList from "./components/main/watched_related/WatchedMovieList";
import WatchedSummary from "./components/main/watched_related/WatchedSummary";
import Navbar from "./components/navbar/Navbar";
import NumResult from "./components/navbar/NumResult";
import Search from "./components/navbar/Search";
import Errors from "./components/ui/Errors";
import Loader from "./components/ui/Loader";
import { tempMovieData, tempWatchedData } from "./data";
import { useEffect, useState } from "react";
import { handleFetching } from "./functions";
import MovieDetails from "./components/movieDetails/MovieDetails";
import { MOVIE, WATCHEDMOVIE } from "./interfaces";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState<MOVIE[]>(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("Naruto");
  const [selected, setSelected] = useState("");

  //Handlers
  /**
   * @param query just get movie name from search bar
   */
  const handleQuery = (value: string): void => setQuery(value);
  /**
   * @param id get movie id and set the state
   */
  const handleSelection = (id: string) =>
    setSelected((prev) => (id == prev ? "" : id));
  /**
   * desc close Movies details - no params
   * @returns void
   */
  const handleDeSelect = () => setSelected("");

  const handleAddToWatchList = (newMovie: WATCHEDMOVIE) =>
    setWatched((prevState) =>
      prevState.some((el) => el.imdbID === selected)
        ? prevState.map((oldMovie) =>
            oldMovie.imdbID === selected
              ? oldMovie.userRating === newMovie.userRating
                ? oldMovie
                : newMovie
              : oldMovie
          )
        : [...prevState, newMovie]
    );
  //Effects

  useEffect(() => {
    const controller = new AbortController();
    handleFetching<MOVIE[]>({
      query,
      setError,
      controller,
      setIsLoading,
      setQueryResult: setMovies,
      withTitle: true,
    });
    return () => controller.abort();
  }, [query]);


  return (
    <>
      <Navbar>
        <Search query={query} onSearch={handleQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {error && !isLoading && <Errors>{error} </Errors>}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList onSelect={handleSelection} movies={movies} />
          )}
        </Box>
        <Box>
          {selected ? (
            <MovieDetails
              onAddToWatch={handleAddToWatchList}
              onDeSelect={handleDeSelect}
              selectedID={selected}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
