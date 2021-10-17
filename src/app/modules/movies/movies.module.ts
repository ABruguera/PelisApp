import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { DialogNewEditMovieComponent } from "./components/dialog-new-edit-movie/dialog-new-edit-movie.component";
import { DialogDeleteMovieComponent } from "./components/dialog-delete-movie/dialog-delete-movie.component";

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, DialogNewEditMovieComponent, DialogDeleteMovieComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
