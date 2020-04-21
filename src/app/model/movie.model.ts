import { CountryModel } from "./country.model";
import { CopmanyModel } from "./company.model";

export class MovieModel {
  id: number;
  poster_path: string;
  original_language: string;
  title: string;
  vote_average: number;
  overview: string;
  image: string;
  production_countries: string[];
  production_companies: string[];
  release_date: string;
  constructor(
    id: number,
    poster_path: string,
    original_language: string,
    title: string,
    vote_average: number,
    overview: string,
    image: string,
    production_countries: string[],
    production_companies: string[],
    release_date: string
  ) {
    this.id = id;
    this.poster_path = poster_path;
    this.original_language = original_language;
    this.title = title;
    this.vote_average = vote_average;
    this.overview = overview;
    this.image = "http://image.tmdb.org/t/p/w185/" + this.poster_path;

    this.production_companies = production_companies;
    this.production_countries = production_countries;
    this.release_date = release_date;
  }
}
