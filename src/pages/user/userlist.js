import React from 'react'
import { Table, Card, Tag, Button,Modal,message,Breadcrumb,Input   } from 'antd';
import './userlist.less'
import untils from '../../untils/untils';
import { userList,userBan,userAgent } from './../../api/user'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import UserInfo from './../../components/User/UserInfoModal/userinfo'
const { confirm } = Modal;
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            loading: false,
            pagination: {},
        }
    }
    params = {
        pagenum: 1,
        disableState:'',
        banId:'',
        agentId:'',
        agentStart:'',
        username:'',
        userid:''
    }
    componentDidMount() {
        this.request();
    }
    // 列表请求
    request = () => {
        let _this = this;
        this.setState({
            loading: true
        })
        userList(this).then(res => {
            console.log(res);
            this.setState({
                list: res.data.list,
                loading: false,
                pagination: untils.pageination(res.data, (current) => {
                    console.log(current);
                    _this.params.pagenum = current
                    _this.request();
                })
            })
        }).catch((err) => {
            console.log(err);
        })
    };
    // 封号操作
    Ban(state,id) {
        if(state === 0) {
            this.params.disableState = 1;
        }else {
            this.params.disableState = 0;
        }
        this.params.banId = id;
        const _this = this;
        confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: '是否确认禁用该用户?',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                userBan(_this).then(res=> {
                    message.success('设置成功');
                    _this.request();
                })
            },
            onCancel() {
                message.warning('已取消');
            },
          });

    };
    // 代理操作
    Agent(agenttype,id) {
        this.params.agentId = id;
        let tips = ''
        if(agenttype === 0) {
            this.params.agentStart = 1;
            tips = '是否确认给该用户设置代理?'
        }else {
            this.params.agentStart = 0;
            tips = '是否取消该用户的代理?'
        }
        const _this = this;
        confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: tips,
            okText: '确认',
            cancelText: '取消',
            onOk() {
                userAgent(_this).then(res=> {
                    message.success('设置成功');
                    _this.request();
                })
            },
            onCancel() {
                message.warning('已取消');
            },
          });
    };
    // 编辑操作
    EditUser(id) {
        this.refs.editId.setInfo(id);
    };
    closeModel() {
        console.log('刷新视图');
        this.request();
    };
    // 检索框的id改变事件
    IptUserId = (e) => {
        this.params.userid = e.target.value
    }
    // 检索框的名字改变事件
    IptUserName = (e) => {
        this.params.username = e.target.value
    }
    // 检索
    search()  {
        this.request();
    }
    // 重置检索框
    reset() {
        this.params.userid = '';
        this.params.username = '';
        this.params.pagenum = 1;
        this.request();
    }
    render() {
        const columns = [
            {
                align: 'center',
                title: 'ID',
                dataIndex: 'id',
                width: 100,
            },
            {
                align: 'center',
                title: '头像',
                dataIndex: 'avatar',
                width: 100,
                render: (src) => <img src={src} width='28px' alt="" className="avatar_mini" />

            },
            {
                align: 'center',
                title: '姓名',
                dataIndex: 'user_nicename',
                width: 200,
            },
            {
                align: 'center',
                title: '魅力等级',
                dataIndex: 'charm_level',
                width: 120,
                render: (h) => <span>{h}级</span>
            },
            {
                align: 'center',
                title: '财富等级',
                dataIndex: 'wealth_level',
                width: 120,
                render: (h) => <span>{h}级</span>
            },
            {
                align: 'center',
                title: '上次登录',
                dataIndex: 'last_login_time',
                width: 250,
                render: (h) => <span>
                    {untils.formateDate(h * 1000)}
                </span>
            },
            {
                align: 'center',
                title: '备注',
                dataIndex: 'remark',
                width: 140,
            },
            {
                align: 'center',
                title: '渠道',
                dataIndex: 'channel_name',
                width: 140,
            },
            {
                align: 'center',
                title: '状态',
                dataIndex: 'user_status',
                width: 140,
                render: (h) => <Tag color={h === 1 ? '#87d068' : '#f56c6c'}>
                    {h === 1 ? '正常' : '已封号'}
                </Tag>
            },
            {
                align: 'center',
                title: '操作',
                width: 340,
                render: (val, item) => <div>
                    <Button onClick={() => this.Ban(item.user_status,item.id)}  type="primary" className={item.user_status === 1 ? 'btn_red' : 'btn_green'} size="small">{item.user_status === 1 ? '封号' : '启用'}</Button>
                    <Button type="primary" danger className="btn_right" size="small">封禁设备</Button>
                    <Button type="primary" danger className="btn_right" size="small">封禁IP</Button>
                    <Button type="primary" className="btn_green" size="small">设置标识</Button>
                    <Button onClick={() => this.Agent(item.is_agent,item.id)} type="primary" className={item.is_agent === 0 ? 'btn_right' : 'btn_red'} size="small">{item.is_agent === 0 ? '设置代理' : '取消代理'}</Button>
                    <Button onClick={()=> this.EditUser(item.id)} type="primary" className="btn_right" size="small">编辑</Button>
                </div>
            },

        ];
        return (
            <div className="table_box">
                <Card>
                    <Breadcrumb className="crumb">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>会员管理</Breadcrumb.Item>
                        <Breadcrumb.Item>用户列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="search_box">
                        <div className="search_id">
                            <span>ID：</span>
                            <Input className="ipt" onChange={this.IptUserId} placeholder="输入用户ID" />
                        </div>
                        <div className="search_id">
                            <span>昵称：</span>
                            <Input className="ipt" onChange={this.IptUserName}  placeholder="输入用户昵称" />
                        </div>
                        <div className="search_id">
                            <Button type="primary" className="btns" onClick={()=>this.search()}>查询</Button>
                            <Button className="btns" onClick={()=> this.reset()}>重置</Button>
                        </div>
                    </div>
                    <Table
                        expandable={{
                            expandedRowRender: record => <div >
                                <span className="coin">消费丫币:{record.consumption}</span>
                                <span className="coin">当前丫币:{record.coin}</span>
                                <span className="coin">消费丫粮:{record.spend_votes}</span>
                                <span className="coin">当前丫粮:{record.votes}</span>
                            </div>,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        pagination={this.state.pagination} loading={this.state.loading} rowKey={row => row.id} columns={columns} dataSource={this.state.list} />,
                </Card>
                <UserInfo ref="editId" editItem={()=> this.closeModel()}></UserInfo>
            </div>
        )
    }
}

export default UserList;