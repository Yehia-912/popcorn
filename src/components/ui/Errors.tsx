import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Error({ children }: Props) {
  return <p className="error">{children}</p>;
}
export default Error;
