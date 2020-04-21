import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieReviewComponent } from "./movie-review/movie-review.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  {
    path: "movies",
    component: MoviesComponent,
    children: [
      { path: "popular", component: MoviesComponent },
      { path: "top", component: MoviesComponent }
    ]
  },
  { path: "movie-review/:id", component: MovieReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
