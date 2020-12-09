import axios from 'axios'
import {Modal} from 'antd'
axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://47.114.175.22:8081/";

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params,
        }).then((response) => {
          landing(url, params, response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  