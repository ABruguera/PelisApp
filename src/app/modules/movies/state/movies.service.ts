import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { HttpService } from "src/app/services/http.service";
import { Movie } from "./movie.model";
import { MoviesStore } from "./movies.store";

@Injectable({ providedIn: "root" })
export class MoviesService {
  constructor(private moviesStore: MoviesStore, private httpService: HttpService) {}

  getAllMovies() {
    return this.httpService.get("/movies").pipe(
      map((res: any) => res as Movie[]),
      tap((movies: Movie[]) => {
        console.log(movies);
        this.moviesStore.set(movies);
      })
    );
  }

  add(movie: Movie) {
    this.moviesStore.add(movie);
  }

  update(id: number, movie: Partial<Movie>) {
    this.moviesStore.update(id, movie);
  }

  remove(id: number) {
    this.moviesStore.remove(id);
  }
}
