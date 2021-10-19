import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Movie } from "../state/movie.model";
import { MoviesQuery } from "../state/movies.query";
import { MoviesService } from "../state/movies.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogNewEditMovieComponent } from "../components/dialog-new-edit-movie/dialog-new-edit-movie.component";
import { DialogDeleteMovieComponent } from "../components/dialog-delete-movie/dialog-delete-movie.component";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  movieData: Movie = {} as Movie;
  actors: string[] = [];
  companies: string[] = [];
  loading$: Observable<boolean> = this.moviesQuery.selectLoading();
  updating = false;
  constructor(
    private moviesServices: MoviesService,
    private moviesQuery: MoviesQuery,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesServices.getAllMovies().subscribe();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id) {
        this.moviesQuery.selectEntity(Number(id)).subscribe((data) => {
          this.actors = this.moviesServices.actors
            .filter((a) => data?.actors.includes(a.id))
            .map((item) => item.first_name + " " + item.last_name);
          this.companies = this.moviesServices.companies
            .filter((a) => data?.companies?.includes(a.id))
            .map((item) => item.name);
          this.movieData = data as Movie;
        });
      }
    });
  }

  editMovie() {
    const dialogRef = this.dialog.open(DialogNewEditMovieComponent, {
      width: "30%",
      data: this.movieData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updating = true;
        this.moviesServices.update(this.movieData.id, result).subscribe(() => {
          this.updating = false;
        });
      }
    });
  }

  deleteMovie() {
    const dialogRef = this.dialog.open(DialogDeleteMovieComponent, {
      width: "30%",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updating = true;
        this.moviesServices.remove(this.movieData.id).subscribe(
          () => {
            this.updating = false;
            this.router.navigate(["/movies"]);
          },
          () => {
            this.updating = false;
          }
        );
      }
    });
  }
}
