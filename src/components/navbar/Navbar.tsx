import { ReactNode } from "react";
import Logo from "./Logo";


interface Iprops {
  children: ReactNode
}
function Navbar({ children }:Iprops) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
