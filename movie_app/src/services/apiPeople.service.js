let ApiPeopleService = class ApiPeopleService {
  constructor() {
    this.apiKey = '904df68f9b1bae895734a0a453faa413';
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/search/person?api_key=';
    this.query = '&query=';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${this.apiKey}${
      this.query
    }${val}`;
  }
};

const apiPeopleService = new ApiPeopleService();
export default apiPeopleService;
