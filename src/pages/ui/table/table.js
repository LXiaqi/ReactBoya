import React from 'react'
import { Table } from 'antd';
class Tables extends React.Component {
    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                width: 100,
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 250,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 200,
            },
            {
                title: '手机号',
                dataIndex: 'phone',
                width: 250,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 350,
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                
              },
            {
                title: '操作',
                dataIndex: 'operation',
                width: 250,
            },
        ];

        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                name: `Edward King ${i + 1}`,
                age: `age ${i + 1}`,
                address: `London, Park Lane no. ${i}`,
                phone: `110${i + 1}`,
                id: i + 1,
                tag_s:''
            });
        }

        return (
            <div>
                <Table  columns={columns} dataSource={data} />,
            </div>
        )
    }
}
export default Tables