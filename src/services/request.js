import axios from "axios";

const GET = "get";
const POST = "post";
const http = axios;

class Request {
  /**
   * Singleton constructor
   * @return {Request} this
   */
  static initialize() {
    return this.instance ? this.instance : (this.instance = new Request());
  }

  /**
   * Get the API request url with base url
   * @param  {String} url Url for request
   * @return {String}     Final url
   */
  getEndpointURL(url) {
    return process.env.VUE_APP_ORIGIN + url;
  }

  /**
   * Initiate a HTTP request
   * @param  {String} method Http verb
   * @param  {String} url    Partial url of api url
   * @param  {Object} params Query strings
   * @param  {Object} data   Post body
   * @return {Promise}       Response
   */
  request(method, url, params, data) {
    let options = {};

    switch (method) {
      case GET:
        options["params"] = params;
        break;
      case POST:
        options = data;
    }

    return this.makeRequest(method, url, options);
  }

  makeRequest(method, url, options) {
    return http[method](this.getEndpointURL(url), options).then(
      (success) => {
        const response = success.data;
        return Promise.resolve(response);
      },
      (error) => {
        return Promise.reject({
          status: "error",
          data: {
            error,
          },
        });
      }
    );
  }

  get(url, params = {}) {
    return this.request(GET, url, params);
  }

  post(url, params = {}, data = {}) {
    return this.request(POST, url, params, data);
  }
}

export default () => {
  return Request.initialize();
};
