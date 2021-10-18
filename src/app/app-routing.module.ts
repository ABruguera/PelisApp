import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./modules/errors/not-found/not-found.component";
import { ServerDownComponent } from "./modules/errors/server-down/server-down.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "movies", loadChildren: () => import("./modules/movies/movies.module").then((m) => m.MoviesModule) },
  {
    path: "internal-error",
    loadChildren: () => import("./modules/errors/errors.module").then((m) => m.ErrorsModule),
    component: ServerDownComponent,
  },
  {
    path: "**",
    loadChildren: () => import("./modules/errors/errors.module").then((m) => m.ErrorsModule),
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
