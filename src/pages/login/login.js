import React from 'react'
import { Input, Button, message } from 'antd';
import { UserOutlined,UnlockOutlined} from '@ant-design/icons';
import './login.less'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
        }
    }
    render() {
        return (
            <div className="login_box">
                <div className="logincontent">
                    <div className="iog_box">
                        <img src={require('../../resource/assets/login/logo.png')} alt="" />
                        <div className="title">账号密码登录</div>
                        <div className="ipt_box">
                            <Input className='username' onChange={this.handleChangeUserName}  placeholder="用户名" prefix={<UserOutlined />} allowClear />
                        </div>
                        <div className="ipt_box">
                            <Input.Password  className='username' onChange={this.handleChangePassWord}  placeholder="密码" prefix={<UnlockOutlined />} />
                        </div>
                        <div className="forget">忘记密码？</div>
                        <Button  block className='login_btn' onClick={this.singIn} loading={this.state.loading} >
                            登录
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    singIn = () => {
        console.log('登录账号：' + this.state.username);
        console.log('登录密码：' + this.state.password);
        if (this.state.username === '' || this.state.password === '') {
            message.warning('登录名和密码不能为空');
        }else {
            this.setState({
                loading:true
            })
            this.timer = setTimeout(() => {
                this.props.history.push({
                    pathname: '/admin/home'
                  });
            }, 1500)
            
        }
    }
    handleChangeUserName = (e) => {
        this.setState({
            username: e.target.value,
        })

    }
    handleChangePassWord = (e) => {
        this.setState({
            password: e.target.value
        })
    }
}
export default Login