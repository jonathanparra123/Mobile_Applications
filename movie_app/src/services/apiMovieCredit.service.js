let ApiMovieCredit = class ApiMovieCredit {
  constructor() {
    this.apiKey = key;
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/person/';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${val}/movie_credits?api_key=${
      this.apiKey
    }`;
  }
};

const apiMovieCredit = new ApiMovieCredit();
export default apiMovieCredit;
