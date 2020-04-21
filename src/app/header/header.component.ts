import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  constructor(private hdService: HeaderService, private router: Router) {}

  ngOnInit() {}

  onGetPopularMovies() {
    this.hdService.getPoupular().subscribe();
  }

  onGetTopRatedMovies() {
    this.hdService.gerTopRated().subscribe();
  }

  onHome() {
    this.router.navigate(["movies"]);
  }
}
