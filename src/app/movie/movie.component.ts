import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "../model/movie.model";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;
  image: string;
  constructor() {}

  ngOnInit() {
    this.image = "http://image.tmdb.org/t/p/w200/" + this.movie.poster_path;
  }
}
