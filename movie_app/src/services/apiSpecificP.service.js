let ApiSpecificP = class ApiSpecificP {
  constructor() {
    this.apiKey = '904df68f9b1bae895734a0a453faa413';
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/person/';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${val}?api_key=${this.apiKey}`;
  }
};

const apiSpecificP = new ApiSpecificP();
export default apiSpecificP;
