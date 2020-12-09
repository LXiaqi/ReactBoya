import React from 'react'
import {  Link,  } from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
        
                <div>
                    <ul>
                        <li>
                            <Link to="/main">这是Home3</Link>
                        </li>
                        <li>
                            <Link to="/about">这是about3</Link>
                        </li>
                        <li>
                            <Link to="/topic">这是Topics3</Link>
                        </li>
                        <li>
                            <Link to="/Imooc">这是Imoc</Link>
                        </li>
                    </ul>
                    <hr />
                   {this.props.children}
                </div>

        )
    }
}
export default Home