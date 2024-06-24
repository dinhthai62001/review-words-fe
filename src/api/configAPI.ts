import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://review-words-be.lc/api/',
  timeout: 6000,
  // headers: {'X-Custom-Header': 'foobar'},
  headers: {
    'Content-Type': 'application/json',
},
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  },
);
