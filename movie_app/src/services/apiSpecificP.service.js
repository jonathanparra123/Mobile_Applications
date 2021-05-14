let ApiSpecificP = class ApiSpecificP {
  constructor() {
    this.apiKey = key;
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/person/';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${val}?api_key=${this.apiKey}`;
  }
};

const apiSpecificP = new ApiSpecificP();
export default apiSpecificP;
