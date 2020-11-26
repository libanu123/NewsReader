import axios from 'axios';
// import store from '../store';

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const apiCall = ({ url, data, method}) =>
  new Promise((resolve, reject) => {
    /*Token added to Header*/
    axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem("token") || "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, function (err) {
      return reject(err);
    });
    /*Token added to Header*/

    /* Response Error Handler*/
    axios.interceptors.response.use((response) => {
      return response
    }, function (error) {
      if (error.response.status == 401) {
        // store.dispatch(AUTH_LOGOUT)
        console.log("Unautherized");
      }
      reject(error);
    });
    /* Response Error Handler*/

    /* API Call*/
    url = proxyUrl + url;
    axios({
      url,
      data,
      method
    })
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
    /* API Call*/
  });

export default apiCall;