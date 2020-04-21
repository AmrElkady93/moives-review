import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoiveReviewService } from "../services/movie-review.service";
import { MovieModel } from "../model/movie.model";

@Component({
  selector: "app-movie-review",
  templateUrl: "./movie-review.component.html",
  styleUrls: ["./movie-review.component.css"]
})
export class MovieReviewComponent implements OnInit {
  movieId: number;
  movie: MovieModel;
  constructor(
    private route: ActivatedRoute,
    private mrservice: MoiveReviewService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params["id"];
    });

    this.mrservice.getMoiveDetails(this.movieId).subscribe(res => {
      this.movie = res;
      this.movie.production_companies = res.production_companies.map(
        c => c.name
      );
      this.movie.production_countries = res.production_countries.map(
        c => c.name
      );
      console.log(this.movie.production_countries);
    });
  }
}
