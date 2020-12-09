import React from 'react';
import { Col, Row } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import 'antd/dist/antd.css';
import './style/common.less'
class Admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="21" className="main">
                    <Header></Header>
                    <Row className="content">
                       {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}

export default Admin;