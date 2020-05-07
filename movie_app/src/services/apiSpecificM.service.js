let ApiSpecificM = class ApiSpecificM {
  constructor() {
    this.apiKey = '904df68f9b1bae895734a0a453faa413';
    this.apiProtocol = 'https://';
    this.apiHost = 'api.themoviedb.org/3/movie/';
    this.filter = '&language=en-US';
  }

  getapiLocation(val) {
    return `${this.apiProtocol}${this.apiHost}${val}?api_key=${this.apiKey}${
      this.filter
    }`;
  }
};

const apiSpecificM = new ApiSpecificM();
export default apiSpecificM;
