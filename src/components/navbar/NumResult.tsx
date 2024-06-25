import { MOVIE } from "../../interfaces";

interface Iprops {
  movies:MOVIE[]
}
function NumResult({ movies }:Iprops) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResult;
