import { useEffect, useState } from "react";

export function useFetch<T>(
  query: string,
  setter: (val: T) => void,
  callback?: () => void
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function handleFetching() {
      try {
        setIsLoading(true);
        //fetch
        const queringMehtod = query.slice(-1);
        const trimedQuery = query.trim().slice(0, -1);
        const response = await fetch(
          `http://www.omdbapi.com/?${queringMehtod}=${trimedQuery}&apikey=db1f2b72`,
          { signal: controller?.signal }
        );
        //throw an error
        if (!response.ok) throw new Error("⛔ Error in fetching movie");
        //get data
        const data = await response.json();

        if (data.Response === "False")
          throw new Error("⚠️ Can't find the movie");
        else setError("");

        setter(queringMehtod === "s" ? data.Search : data);
      } catch (err: unknown) {
        if (err instanceof Error)
          err.name !== "AbortError" ? setError(err.message) : null;
      } finally {
        setIsLoading(false);
      }
    }
    handleFetching();
    return () => controller.abort();
  }, [query]);
  return { isLoading, error };
}
