import React from 'react'
import {  Link,  } from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
        
                <div>
                    <ul>
                        <li>
                            <Link to="/main">这是Home2</Link>
                        </li>
                        <li>
                            <Link to="/about">这是about2</Link>
                        </li>
                        <li>
                            <Link to="/topic">这是Topics2</Link>
                        </li>
                    </ul>
                    <hr />
                   {this.props.children}
                </div>

        )
    }
}
export default Home