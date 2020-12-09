import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Main2 from './../router2/main2'
import About from './../router1/about'
import Topic from './../router1/topic'
import Home from './home'
class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path='/main'  render={()=> 
                        <Main2>
                           <Route path='/main/a' exact component={About}></Route>
                        </Main2>
                    } ></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topic' component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}
export default IRouter