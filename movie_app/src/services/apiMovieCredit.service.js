let ApiMovieCredit = class ApiMovieCredit {
  constructor() {
    this.apiKey = '904df68f9b1bae895734a0a453faa413';
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
