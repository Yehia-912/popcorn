export interface MOVIE {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}
export interface WATCHEDMOVIE {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;

  Runtime: number;
  imdbRating: number;
  userRating: number;

  userDecisionNumber?: number;
}
export interface FEATCHPARAMETARS {
  query: string;
  setIsLoading: (val: boolean) => void;
  setError: (val: string) => void;
  setQueryResult: (val: fullMovieDetails) => void;
  withTitle: boolean;
}
export interface fullMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
