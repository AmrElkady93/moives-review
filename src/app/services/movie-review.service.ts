import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieModel } from "../model/movie.model";
import { Constants } from "../constant/constant";

@Injectable({ providedIn: "root" })
export class MoiveReviewService {
  constructor(private http: HttpClient) {}

  getMoiveDetails(id: number) {
    return this.http.get<any>(
      Constants.servicesURLs.movieDetails +
        id +
        "?api_key=2870711508af960685733ad85f1fd4bf"
    );
  }
}
