import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { MovieComponent } from "./movie/movie.component";
import { FooterComponent } from "./footer/footer.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { MovieReviewComponent } from "./movie-review/movie-review.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { MoviesComponent } from "./movies/movies.component";
import { InterceptorService } from "./services/interceptor.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MovieComponent,
    FooterComponent,
    PaginationComponent,
    MovieReviewComponent,
    SpinnerComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
