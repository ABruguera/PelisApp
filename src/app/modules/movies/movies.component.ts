import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DialogNewEditMovieComponent } from "./components/dialog-new-edit-movie/dialog-new-edit-movie.component";
import { Movie } from "./state/movie.model";
import { MoviesQuery } from "./state/movies.query";
import { MoviesService } from "./state/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  moviesList$: Observable<Movie[]> = this.moviesQuery.selectAll();
  loading$: Observable<boolean> = this.moviesQuery.selectLoading();
  updating = false;
  searchFilter = "";
  constructor(private moviesServices: MoviesService, private moviesQuery: MoviesQuery, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.moviesServices.getAllMovies().subscribe();
  }

  trackBy(_index: any, item: any) {
    return item.id;
  }

  addMovie() {
    const dialogRef = this.dialog.open(DialogNewEditMovieComponent, {
      width: "30%",
      minWidth: "300px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updating = true;
        this.moviesServices.add(result).subscribe(
          () => {
            this.updating = false;
          },
          () => {
            this.updating = false;
          }
        );
      }
    });
  }

  filterChanged() {
    this.moviesList$ = this.moviesQuery.selectAll({
      filterBy: [(entity) => entity.title.toLowerCase().includes(this.searchFilter.toLowerCase())],
    });
  }
}
