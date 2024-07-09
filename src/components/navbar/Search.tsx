import { useEffect, useRef } from "react";

interface Props {
  query: string;
  onSearch: (value: string) => void;
}
function Search({ query, onSearch }: Props) {
  const inputEL = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputEL.current?.focus();
  }, []);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (document.activeElement === inputEL.current) return;
      if (e.code === "Enter") inputEL.current?.focus();
      onSearch("");
    };

    document.addEventListener("keydown", callback);
  }, [onSearch]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      ref={inputEL}
    />
  );
}

export default Search;
