import { Col, Row } from 'antd'
import React from 'react'
import './header.less'
import {withRouter} from 'react-router-dom'
import Until from '../../untils/untils'
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    };
    componentDidMount() {
       this.timer =  setInterval(() => {
            let sysTime = Until.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎！大哥</span>
                        <span className="singout" onClick={this.signout}>退出</span>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        
                    </Col>

                </Row>
            </div>
        )
    }
    signout =()=> {
        console.log('退出登录');
        this.props.history.push({
            pathname: '/login'
          });
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
}
export default withRouter(Header)