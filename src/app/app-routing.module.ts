import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieReviewComponent } from "./movie-review/movie-review.component";
import { MoviesComponent } from "./movies/movies.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./login/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  {
    path: "movies",
    component: MoviesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "popular", component: MoviesComponent },
      { path: "top", component: MoviesComponent }
    ]
  },
  {
    path: "movie-review/:id",
    canActivate: [AuthGuard],
    component: MovieReviewComponent
  },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
