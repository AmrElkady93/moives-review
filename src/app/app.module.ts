import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { MovieComponent } from "./movie/movie.component";
import { SearchComponent } from "./search/search.component";
import { FooterComponent } from "./footer/footer.component";
import { FilterComponent } from "./filter/filter.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { MovieReviewComponent } from "./movie-review/movie-review.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { MoviesComponent } from "./movies/movies.component";
import { InterceptorService } from "./services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MovieComponent,
    SearchComponent,
    FooterComponent,
    FilterComponent,
    PaginationComponent,
    MovieReviewComponent,
    SpinnerComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
