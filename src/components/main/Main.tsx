import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}
function Main({ children }: Iprops) {
  return <main className="main">{children}</main>;
}

export default Main;
