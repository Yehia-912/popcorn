interface Props {
  query: string;
  onSearch: (value: string) => void;
}
function Search({ query, onSearch }: Props) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default Search;
