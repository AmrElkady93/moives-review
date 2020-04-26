import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { HomeService } from "../services/home.service";
import { MovieModel } from "../model/movie.model";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-home",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit, OnDestroy {
  constructor(
    private hservece: HomeService,
    private spinner: NgxSpinnerService
  ) {}
  movieSub: Subscription;
  currentPage: number = 1;
  total_results: number;
  movies: MovieModel[];

  ngOnInit() {
    this.spinner.show();

    this.movieSub = this.hservece.getPopularMoives().subscribe(() => {
      this.currentPage = 1;
    });

    this.hservece.moivesChanged.subscribe(res => {
      this.movies = res;
      this.spinner.hide();
    });
    this.hservece.total_results_Changed.subscribe(res => {
      this.total_results = res;
    });
  }

  pageChanged(event: Event) {
    this.spinner.show();

    this.currentPage = +event;

    this.movieSub = this.hservece
      .getPopularMoviesPageNumber(this.currentPage)
      .subscribe();
    this.spinner.hide();
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
