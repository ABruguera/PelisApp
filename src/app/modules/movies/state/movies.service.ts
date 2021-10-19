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
  companies: any[] = [];
  constructor(private moviesStore: MoviesStore, private httpService: HttpService) {}

  getAllMovies() {
    if (this.loaded) {
      return of();
    }
    return this.httpService.get("/movies").pipe(
      map((res: any) => res as Movie[]),
      tap((movies: Movie[]) => {
        let cargados = 0;
        this.httpService.get("/actors").subscribe((actors: any) => {
          this.actors = actors;
          cargados = this._finishLoad(cargados, movies);
        });
        this.httpService.get("/companies").subscribe((companies: any) => {
          this.companies = companies;
          cargados = this._finishLoad(cargados, movies);
        });
      })
    );
  }

  private _finishLoad(cargados: number, movies: Movie[]) {
    cargados += 1;
    if (cargados === 2) {
      this.moviesStore.set(movies);
      this.loaded = true;
    }
    return cargados;
  }

  add(movie: Movie) {
    return this.httpService.post("/movies", movie).pipe(
      map((res: any) => res as Movie),
      tap((data: Movie) => {
        this.moviesStore.add(data);
      })
    );
  }

  update(id: number, movie: Partial<Movie>) {
    return this.httpService.put("/movies/" + id, movie).pipe(
      tap((data) => {
        this.moviesStore.update(id, data);
      })
    );
  }

  remove(id: number) {
    return this.httpService.delete("/movies/" + id).pipe(
      tap(() => {
        this.moviesStore.remove(id);
      })
    );
  }
}
