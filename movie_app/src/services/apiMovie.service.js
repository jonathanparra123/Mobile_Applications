let ApiMovieService = class ApiMovieService {
  constructor() {
    this.apiKey = key;
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/discover/movie?api_key=';
    this.filter = '&sort_by=popularity.desc&with_genres=';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${this.apiKey}${
      this.filter
    }${val}`;
  }
};

const apiMovieService = new ApiMovieService();
export default apiMovieService;
