import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieDetailsRoutingModule } from "./movie-details-routing.module";
import { MovieDetailsComponent } from "./movie-details.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, MovieDetailsRoutingModule, SharedModule],
})
export class MovieDetailsModule {}
