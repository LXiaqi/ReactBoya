import axios from '../axios/axios'
// 获取七牛云Token
export async function qiniuToken(that) {
    const res = await axios.get({
        url:'/common/oss',
    })
    return res;
}