import { ReactNode } from "react";

interface Props {
  Plot: string;
  Actors: string;
  Director: string;
  children: ReactNode;
}
function MovieDesc({ Actors, Director, Plot, children }: Props) {
  return (
    <section>
      <div className="rating">
        {children}
      </div>
      <p>
        <em>{Plot}</em>
      </p>
      <p>Starring {Actors}</p>
      <p>Directed by {Director}</p>
    </section>
  );
}
export default MovieDesc;
