import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class SignupService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post("http://localhost:9090/signup", user, {
      observe: "response"
    });
  }
}
