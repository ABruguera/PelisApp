import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Movie } from "../state/movie.model";
import { MoviesQuery } from "../state/movies.query";
import { MoviesService } from "../state/movies.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogNewEditMovieComponent } from "../components/dialog-new-edit-movie/dialog-new-edit-movie.component";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  movieData: Movie = {} as Movie;
  actors: string[] = [];
  loading$: Observable<boolean> = this.moviesQuery.selectLoading();
  updating = false;
  constructor(
    private moviesServices: MoviesService,
    private moviesQuery: MoviesQuery,
    private route: ActivatedRoute,
    public dialog: MatDialog
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
      this.updating = true;
      if (result) {
        this.moviesServices.update(this.movieData.id, result).subscribe(() => {
          this.updating = false;
        });
      }
    });
  }
}
