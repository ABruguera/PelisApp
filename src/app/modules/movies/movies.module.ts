import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { DialogNewEditMovieComponent } from './components/dialog-new-edit-movie/dialog-new-edit-movie.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, DialogNewEditMovieComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
