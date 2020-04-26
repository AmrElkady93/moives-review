import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header.service";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { User } from "../model/user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  userData: string;

  constructor(
    private hdService: HeaderService,
    private lService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.lService.user.subscribe(res => {
      this.userData = res.fullName;
      console.log(this.userData);
    });
  }

  onGetPopularMovies() {
    this.hdService.getPoupular().subscribe();
  }

  onGetTopRatedMovies() {
    this.hdService.gerTopRated().subscribe();
  }

  onHome() {
    this.router.navigate(["/movies"]);
    this.hdService.getPoupular().subscribe();
  }

  logout() {
    this.lService.logout();
    this.router.navigate(["/login"]);
  }
}
