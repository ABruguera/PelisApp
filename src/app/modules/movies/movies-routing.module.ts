import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  { path: "", component: MoviesComponent },
  {
    path: ":id",
    loadChildren: () => import("./movie-details/movie-details.module").then((m) => m.MovieDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
