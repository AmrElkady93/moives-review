import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private lService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.lService.login(form.value.email, form.value.password).subscribe(
      res => {
        this.isLogged = false;
        let user = new User();
        user.email = res.body["email"];
        user.fullName = res.body["fullName"];
        this.lService.user.next(user);
        this.lService.storeLoginData(user);

        this.router.navigate(["/movies"]);
      },
      error => {
        console.log("error", error.status);
        this.isLogged = true;
      }
    );
  }
}
