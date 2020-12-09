import React from 'react'
import {  Link } from 'react-router-dom';

class Main3 extends React.Component {
    render() {
        return (
                <div>
                    this is Main3 Page 这个演示页面
                    <br/>
                    <Link to='/main/test-id'>嵌套路由</Link>
                    <br/>
                    <Link to='/main/789'>嵌套路由2</Link>
                    <hr/>
                    {this.props.children}
                </div>
        )
    }
}
export default Main3