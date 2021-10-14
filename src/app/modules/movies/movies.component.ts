import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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
  constructor(private moviesServices: MoviesService, private moviesQuery: MoviesQuery) {}

  ngOnInit(): void {
    this.moviesServices.getAllMovies().subscribe();
  }

  trackBy(_index: any, item: any) {
    return item.id;
  }
}
