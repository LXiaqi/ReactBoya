import axios from '../axios/axios'
export async function userList(that) {
    const res = await axios.get({
            url:'/user/index',
            data:{
                page_size:10,
                page:that.params.pagenum,
                uid:that.params.userid,
                nickname:that.params.username
            },
    })
    return res;
}
// put请求， 封号操作 
export async function userBan(that) {
    console.log(that.params);
    const res = await axios.put({
            url:'/user/index/'+ that.params.banId,
            data: {
                user_status:that.params.disableState,
            }
    })
    return res;
}
// 设置代理
export async function userAgent(that) {
    console.log(that.params);
    const res = await axios.put({
            url:'/user/index/'+ that.params.agentId,
            data: {
                is_agent : that.params.agentStart
            }
    })
    return res;
}
// 用户详情
export async function userDetails(that) {
    const res = await axios.get({
        url:'/user/index/'+that.editid,
    });
    return res;
}
// 用户修改
export async function userEdit(that) {
    const res = await axios.put({
        url:'/user/index/'+that.editid,
        data:that.state.formList
    });
    return res;
}