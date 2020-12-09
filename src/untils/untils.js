export default {
    formateDate(time) {
        if(!time) return '';
        let date = new Date(time);
        return date.getFullYear() +'-'+(date.getMonth()+1)+'-'+date.getDate()+'  '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    },
    pageination(data,callback) {
        return {
            onChange:(current)=> {
                callback(current);
            },
            courrent:data.page,
            pageSize:10,
            total:data.total_count,
            showTotal:()=> {
                return `共${data.total_count}条`
            },
            // showQuickJumper:true
        }
         
    }
}