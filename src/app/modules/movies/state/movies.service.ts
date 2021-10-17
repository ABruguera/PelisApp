import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { HttpService } from "src/app/services/http.service";
import { Movie } from "./movie.model";
import { MoviesStore } from "./movies.store";

@Injectable({ providedIn: "root" })
export class MoviesService {
  loaded = false;
  actors: any[] = [];
  constructor(private moviesStore: MoviesStore, private httpService: HttpService) {}

  getAllMovies() {
    if (this.loaded) {
      return of();
    }
    return this.httpService.get("/movies").pipe(
      map((res: any) => res as Movie[]),
      tap((movies: Movie[]) => {
        this.httpService.get("/actors").subscribe((actors: any) => {
          this.actors = actors;
          this.moviesStore.set(movies);
          this.loaded = true;
        });
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
