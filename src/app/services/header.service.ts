import { HttpClient } from "@angular/common/http";
import { Constants } from "../constant/constant";
import { Injectable } from "@angular/core";
import { HomeService } from "./home.service";

@Injectable({ providedIn: "root" })
export class HeaderService {
  constructor(private http: HttpClient, private hService: HomeService) {}

  getPoupular() {
    return this.hService.getPopularMoives();
  }

  gerTopRated() {
    return this.hService.getTopRatedMoives();
  }
}
