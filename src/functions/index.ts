import { FEATCHPARAMETARS } from "../interfaces";

export const average = (arr: []) =>
  arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

export const handleFetching = async ({
  query,
  setError,
  setIsLoading,
  setMovies,
}: FEATCHPARAMETARS) => {
  try {
    setIsLoading(true);
    //fetch
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=f84fc31d&s=${query}`
    );
    //throw an error
    if (!response.ok) throw new Error("⛔ Error in fetching movie");
    //get data
    const data = await response.json();

    if (data.Response === "False") throw new Error("⚠️ Can't find the movie");
    else setError("");

    setMovies(data.Search);
  } catch (err: unknown) {
    if (err instanceof Error) setError(err.message);
  } finally {
    setIsLoading(false);
  }
};
