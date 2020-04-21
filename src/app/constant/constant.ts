export class Constants {
  public static serverURL = "http://api.themoviedb.org/3/";

  public static servicesURLs = {
    popularMovie: Constants.serverURL + "movie/popular",
    topRatedMovie: Constants.serverURL + "movie/top_rated",
    movieDetails: Constants.serverURL + "movie/"
  };
}
