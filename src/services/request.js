import config from '../config';
import axios from 'axios';


class Request {
    static call(url, method, reqHeaders, data) {
        const headers = {
            ...config.requestHeaders,
            ...reqHeaders,
        }

        const reqObj = {
            method,
            url: `${config.apiUrl}${url}`,
            headers,
            data,
        };

        return axios(reqObj)
            .then((res) => {
            	//Apply any global data formatting here
                return Promise.resolve(res.data);
            })
            .catch((error) => {
                const responseError = new Error();
                responseError.code = 500;
                responseError.message = 'Something went wrong!';

                if (error.response) {
                    const errMessage = error.response.data.message;
                    responseError.code = error.response.status;
                    if (errMessage) {
                        responseError.message = errMessage;
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    if (error.message) {
                        responseError.message = error.message;
                    }
                }
                return Promise.reject(responseError);
            });
    }

    static get(url, reqHeader) {
        return Request.call(url, 'GET', reqHeader);
    }

    static post(url, reqBody, reqHeader) {
        return Request.call(url, 'POST', reqHeader, reqBody);
    }

    static put(url, reqBody, reqHeader) {
        return Request.call(url, 'PUT', reqHeader, reqBody);
    }

    static delete(url, reqHeader) {
        return Request.call(url, 'DELETE', reqHeader);
    }
}

export default Request;