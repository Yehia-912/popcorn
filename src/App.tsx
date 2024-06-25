

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { tempMovieData } from "./data";
import  { useState } from "react";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
