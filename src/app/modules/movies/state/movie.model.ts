export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
}

export function createMovie(params: Partial<Movie>) {
  return {} as Movie;
}
