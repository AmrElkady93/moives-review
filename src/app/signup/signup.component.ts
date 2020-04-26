import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../model/user.model";
import { SignupService } from "../services/singup.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user = new User();
  acceptTerms: boolean = true;
  isNotPasswordMatched: boolean = false;
  constructor(private sService: SignupService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirm_password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // this.isNotPasswordMatched = this.checkPassword(this.signupForm);
    // console.log(this.isNotPasswordMatched);
    // if (!this.isNotPasswordMatched) {
    this.user.fullName =
      this.signupForm.value["first_name"] +
      " " +
      this.signupForm.value["last_name"];
    this.user.email = this.signupForm.value["email"];
    this.user.password = this.signupForm.value["password"];

    this.sService.register(this.user).subscribe(
      res => {
        console.log(res.body);
        alert("you registerd successfully");
        this.router.navigate(["/login"]);
      },
      errorMessage => {
        alert(errorMessage.message);
      }
    );
  }

  checkPassword(form: FormGroup) {
    return form.get("password") == form.get("confirm_password");
  }
}
