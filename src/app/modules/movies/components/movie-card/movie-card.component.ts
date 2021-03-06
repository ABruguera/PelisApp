import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "../../state/movie.model";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input() data: Movie = {} as Movie;
  constructor() {}

  ngOnInit(): void {}
}
