import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main3 from './main3'
import About from './../router1/about'
import Info from './info'
import Topic from './../router1/topic'
import Home from './home'
import NoMatch from './nomatch'

class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path='/main' render={() =>
                            <Main3>
                                <Route path='/main/:mainId' exact component={Info}></Route>
                            </Main3>
                        } ></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}
export default IRouter