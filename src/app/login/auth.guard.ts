import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { LoginService } from "../services/login.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private lService: LoginService, private router: Router) {
    console.log("GURAD------");
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.lService.user.pipe(
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(["/login"]);
      })
    );
  }
}
