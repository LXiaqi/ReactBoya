import React from 'react'
import { Table, Card, } from 'antd';
import axios from '../../../axios/axios'
class DynamicTables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            loading: false,
        }
    }
    componentDidMount() {
        this.request();
    }
    request = () => {
        this.setState ({
            loading:true
        })
        axios.ajax({
            url:'userOrder/userOrderList',
            data:{
                params:{
                    pageSize:10,
                    pagenum:1
                }
            },
        }).then((res)=> {
            console.log(res);
            this.setState ({
                list:res.data.list,
                loading:false
            })
        }).catch((err) => {
            console.log(err);
        })
        
    }
    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                width: 250,
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 250,
            },
           
            {
                title: '手机号',
                dataIndex: 'phone',
                width: 250,
            },
            {
                title: '时间',
                dataIndex: 'createdBy',
                width: 250,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 350,
            },
            {
                title: '订单价格',
                dataIndex: 'totalPrice',
                width: 350,
            },
        ];
        return (
            <div>
                <Card title="动态表格">
                    <Table  loading={this.state.loading} rowKey={row=>row.id} columns={columns} dataSource={this.state.list} />,
                </Card>
            </div>
        )
    }
}
export default DynamicTables