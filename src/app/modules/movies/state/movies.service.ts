import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { tap } from "rxjs/operators";
import { Movie } from "./movie.model";
import { MoviesStore } from "./movies.store";

@Injectable({ providedIn: "root" })
export class MoviesService {
  constructor(private moviesStore: MoviesStore, private http: HttpClient) {}

  get() {
    return this.http.get<Movie[]>("https://api.com").pipe(
      tap((entities) => {
        this.moviesStore.set(entities);
      })
    );
  }

  add(movie: Movie) {
    this.moviesStore.add(movie);
  }

  update(id, movie: Partial<Movie>) {
    this.moviesStore.update(id, movie);
  }

  remove(id: ID) {
    this.moviesStore.remove(id);
  }
}
