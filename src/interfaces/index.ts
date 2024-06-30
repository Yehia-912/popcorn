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

  runtime: number;
  imdbRating: number;
  userRating: number;
}
export interface FEATCHPARAMETARS {
  query: string;
  setIsLoading: (val: boolean) => void;
  setError: (val: string) => void;
  setMovies: (val: MOVIE[]) => void;
}
