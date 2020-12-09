import axios from 'axios'
import {Modal} from 'antd'
axios.defaults.timeout = 100000;
axios.defaults.baseURL = "";
export default class Axios {
    // get 请求
    static get(options) {        
        return new Promise((resolve,reject)=> {
            axios({
                url:options.url,
                method:'get',
                params:options.data || ''
            }).then((response)=> {
                if(response.status === 200) {
                    let res = response.data;
                    if(res.code === 1) {
                        resolve(res)
                    }else {
                        Modal.info({
                            title:'提示',
                            content:res.message
                        })
                    }
                }else {
                    reject(response)
                }
            })
        });
    }
    // Put 请求
    static put(options) {      
        return new Promise((resolve,reject)=> {
            axios({
                url:options.url,
                method:'put',
                params:options.data || ''
            }).then((response)=> {
                if(response.status === 200) {
                    let res = response.data;
                    if(res.code === 1) {
                        resolve(res)
                    }else {
                        Modal.info({
                            title:'提示',
                            content:res.message
                        })
                    }
                }else {
                    reject(response)
                }
            })
        });
    }
}