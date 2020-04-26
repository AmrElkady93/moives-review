import { BehaviorSubject, throwError } from "rxjs";
import { User } from "../model/user.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class LoginService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  login(email: String, password: string) {
    return this.http.post(
      "http://localhost:9090/login",
      {
        email: email,
        password: password
      },
      { observe: "response" }
    );
  }

  logout() {
    this.user.next(null);
  }

  storeLoginData(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
