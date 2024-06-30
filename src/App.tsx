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

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("interstellar");

  const handleQuery = (value: string): void => setQuery(value);
  useEffect(() => {
    handleFetching({
      query,
      setError,
      setIsLoading,
      setMovies,
    });
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
          {!isLoading && !error && <MovieList movies={movies} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
