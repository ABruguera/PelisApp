import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Movie } from "../../state/movie.model";
import { MoviesService } from "../../state/movies.service";

@Component({
  selector: "app-dialog-new-edit-movie",
  templateUrl: "./dialog-new-edit-movie.component.html",
  styleUrls: ["./dialog-new-edit-movie.component.scss"],
})
export class DialogNewEditMovieComponent {
  movieForm = new FormGroup({
    title: new FormControl(this.data ? this.data.title : "", Validators.required),
    poster: new FormControl(this.data ? this.data.poster : ""),
    year: new FormControl(this.data ? this.data.year : "", Validators.required),
    duration: new FormControl(this.data ? this.data.duration : "", Validators.required),
    imdbRating: new FormControl(this.data ? this.data.imdbRating : "", Validators.required),
    sinopsis: new FormControl(this.data ? this.data.sinopsis : ""),
    actors: new FormControl(this.data ? this.data.actors : ""),
  });
  genreInput = "";
  generosForm: string[] = this.data && this.data.genre ? [...this.data.genre] : [];
  actors = this.moviesService.actors;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private moviesService: MoviesService,
    public dialogRef: MatDialogRef<DialogNewEditMovieComponent>
  ) {}

  addGenre() {
    const genre = this.genreInput.trim();
    if (genre.length > 0) {
      this.generosForm.push(genre);
      this.genreInput = "";
    }
  }

  removeGenre(genre: string) {
    this.generosForm = this.generosForm.filter((item) => item !== genre);
  }

  get form() {
    return this.movieForm.controls;
  }

  saveMovie() {
    if (this.movieForm.valid) {
      const values = this.movieForm.value;
      values.genre = this.generosForm;
      this.dialogRef.close(values);
    }
  }
}
