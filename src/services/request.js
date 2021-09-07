import axios from "axios";

const GET = "get";
const POST = "post";
const http = axios;

/**
 * Get the API request url with base url
 * @param  {String} url Url for request
 * @return {String}     Final url
 */
function getEndpointURL(url) {
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
function request(method, url, params, data) {
  let options = {};

  switch (method) {
    case GET:
      options["params"] = params;
      break;
    case POST:
      options = data;
  }

  return makeRequest(method, url, options);
}

function makeRequest(method, url, options) {
  return http[method](getEndpointURL(url), options).then(
    success => {
      const response = success.data;
      return Promise.resolve(response);
    },
    error => {
      return Promise.reject({
        status: "error",
        data: {
          error
        }
      });
    }
  );
}

export function get(url, params = {}) {
  return request(GET, url, params);
}

export function post(url, params = {}, data = {}) {
  return request(POST, url, params, data);
}
