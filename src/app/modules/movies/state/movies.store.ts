/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Movie } from "./movie.model";

export interface MoviesState extends EntityState<Movie, number> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "movies" })
export class MoviesStore extends EntityStore<MoviesState> {
  constructor() {
    super();
  }
}
