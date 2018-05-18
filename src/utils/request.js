// @flow

import axios from 'axios';
import config from '../config';


class Request {
  static call(url: string, method: string, reqHeaders?: Object, data?: Object) {
    const headers = {
      ...config.requestHeaders,
      ...reqHeaders,
    };

    const reqObj = {
      method,
      url: `${config.apiUrl}${url}`,
      headers,
      data,
    };

    return axios(reqObj)
      .then(res =>
        // Apply any global data formatting here
        Promise.resolve(res.data))
      .catch((error) => {
        const responseError = {};
        responseError.code = 500;
        responseError.message = 'Something went wrong!';

        if (error.response) {
          const errMessage = error.response.data.message;
          responseError.code = error.response.status;
          if (errMessage) {
            responseError.message = errMessage;
          }
        } else if (error.request) {
          responseError.code = 404;
          responseError.message = 'Not Found!';
        } else if (error.message) {
          responseError.message = error.message;
        }
        return Promise.reject(responseError);
      });
  }

  static get(url: string, reqHeader?: Object) {
    return Request.call(url, 'GET', reqHeader);
  }

  static post(url: string, reqBody: Object, reqHeader?: Object) {
    return Request.call(url, 'POST', reqHeader, reqBody);
  }

  static put(url: string, reqBody: Object, reqHeader?: Object) {
    return Request.call(url, 'PUT', reqHeader, reqBody);
  }

  static delete(url: string, reqHeader?: Object) {
    return Request.call(url, 'DELETE', reqHeader);
  }
}

export default Request;
