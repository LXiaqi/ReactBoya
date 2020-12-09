import React from 'react'
import {  Link } from 'react-router-dom';

class Main2 extends React.Component {
    render() {
        return (
                <div>
                    this is Main2 Page 这个演示页面
                    <Link to='/main/a'>嵌套路由</Link>
                    <hr/>
                    {this.props.children}
                </div>
        )
    }
}
export default Main2