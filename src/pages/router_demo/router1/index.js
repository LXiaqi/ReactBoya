import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './main'
import About from './about'
import Topic from './topic'

class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">这是Home</Link>
                        </li>
                        <li>
                            <Link to="/about">这是about</Link>
                        </li>
                        <li>
                            <Link to="/topic">这是Topics</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
export default Home