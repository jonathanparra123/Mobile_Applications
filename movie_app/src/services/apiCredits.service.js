let ApiCreditService = class ApiCreditService {
  constructor() {
    this.apiKey = key;
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/movie/';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${val}/credits?api_key=${
      this.apiKey
    }`;
  }
};

const apiCreditService = new ApiCreditService();
export default apiCreditService;
