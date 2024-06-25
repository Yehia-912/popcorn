import { MOVIE } from "../../interfaces";
import Logo from "./Logo";
import NumResult from "./NumResult";
import Search from "./Search";

interface Iprops {
  movies:MOVIE[]
}
function Navbar({ movies }:Iprops) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
}

export default Navbar;
