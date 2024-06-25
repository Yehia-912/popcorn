import { useState } from "react";
import { tempWatchedData } from "../../../data";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

function WatchedRelated() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedRelated;