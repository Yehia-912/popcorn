export const average = (arr: number[]) =>
  arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

/**
 * @desc featching movie with shord properties
 * @param  {query,setError,setIsLoading,setMovies} - movie title - error setter - loading setter - movies setter
 */
export async function handleFetching<T>({
  query,
  setError,
  setIsLoading,
  setQueryResult,
  controller,
  withTitle,
}: {
  query: string;
  setIsLoading: (val: boolean) => void;
  setError: (val: string) => void;
  setQueryResult: (val: T) => void;
  withTitle: boolean;
  controller?: AbortController;
}) {
  try {
    setIsLoading(true);
    //fetch
    const queringMehtod = withTitle ? "s" : "i";
    const trimedQuery = query.trim();
    const response = await fetch(
      `http://www.omdbapi.com/?${queringMehtod}=${trimedQuery}&apikey=db1f2b72`,
      { signal: controller?.signal }
    );
    //throw an error
    if (!response.ok) throw new Error("⛔ Error in fetching movie");
    //get data
    const data = await response.json();

    if (data.Response === "False") throw new Error("⚠️ Can't find the movie");
    else setError("");

    setQueryResult(withTitle ? data.Search : data);
  } catch (err: unknown) {
    if (err instanceof Error)
      err.name !== "AbortError" ? setError(err.message) : null;
  } finally {
    setIsLoading(false);
  }
}
