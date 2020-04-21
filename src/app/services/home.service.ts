import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Constants } from "../constant/constant";
import { MovieModel } from "../model/movie.model";
import { Subject } from "rxjs";
import { map, tap, take, exhaustMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class HomeService {
  moivesChanged = new Subject<MovieModel[]>();
  movies: MovieModel[];

  total_results_Changed = new Subject<number>();
  total_results: number;
  private category: string;

  constructor(private http: HttpClient) {}

  getPopularMoives() {
    this.category = "pop";
    return this.http.get<any>(Constants.servicesURLs.popularMovie).pipe(
      tap(res => {
        this.movies = [...res.results];
        this.total_results = res.total_results;

        this.moivesChanged.next(this.movies.slice());
        this.total_results_Changed.next(this.total_results);
      })
    );
  }

  getTopRatedMoives() {
    this.category = "top";
    return this.http.get<any>(Constants.servicesURLs.topRatedMovie).pipe(
      tap(res => {
        this.movies = [...res.results];
        this.total_results = res.total_results;

        this.moivesChanged.next(this.movies.slice());
        this.total_results_Changed.next(this.total_results);
      })
    );
  }

  getPopularMoviesPageNumber(pageNumebr: number) {
    if (this.category == "pop") {
      return this.http
        .get<any>(Constants.servicesURLs.popularMovie + "?page=" + pageNumebr)
        .pipe(
          tap(res => {
            this.movies = [...res.results];
            this.total_results = res.total_results;

            this.moivesChanged.next(this.movies.slice());
            this.total_results_Changed.next(this.total_results);
          })
        );
    } else {
      return this.http
        .get<any>(Constants.servicesURLs.topRatedMovie + "?page=" + pageNumebr)
        .pipe(
          tap(res => {
            this.movies = [...res.results];
            this.total_results = res.total_results;

            this.moivesChanged.next(this.movies.slice());
            this.total_results_Changed.next(this.total_results);
          })
        );
    }
  }

  setMovies(moives: MovieModel[], total_results: number) {
    this.movies = moives;
    this.total_results = total_results;
    this.moivesChanged.next(this.movies.slice());
    this.total_results_Changed.next(this.total_results);
  }

  getMovies() {
    return this.movies.slice();
  }
  getTotalResult() {
    return this.total_results;
  }
}
