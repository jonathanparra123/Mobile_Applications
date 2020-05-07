let ApiCreditService = class ApiCreditService {
  constructor() {
    this.apiKey = '904df68f9b1bae895734a0a453faa413';
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
