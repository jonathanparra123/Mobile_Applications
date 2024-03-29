let ApiGenreService = class ApiGenreService {
  constructor() {
    this.apiKey = key;
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/genre/movie/list?api_key=';
  }

  getapiLocation() {
    return `${this.apiProtocol}${this.apiHost}${this.apiKey}`;
  }
};

const apiGenreService = new ApiGenreService();
export default apiGenreService;
