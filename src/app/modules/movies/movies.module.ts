import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
