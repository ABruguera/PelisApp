import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Movie } from "../state/movie.model";
import { MoviesQuery } from "../state/movies.query";
import { MoviesService } from "../state/movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie | undefined>;
  actors: string[] = [];
  constructor(private moviesServices: MoviesService, private moviesQuery: MoviesQuery, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.moviesServices.getAllMovies().subscribe();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id) {
        this.movie$ = this.moviesQuery.selectEntity(Number(id));
        this.movie$.subscribe((data) => {
          this.actors = this.moviesServices.actors
            .filter((a) => data?.actors.includes(a.id))
            .map((item) => item.first_name + " " + item.last_name);
        });
      }
    });
  }
}
