import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin'
import OrderList from './pages/order/orderList/orderList'
import NoMatch_ from './pages/nomatch/nomatch'
import Buttons from './pages/ui/button/button'
import Home from './pages/home/home'
import Modals from './pages/ui/modals/modals'
import Tables from './pages/ui/table/table'
import DynamicTables from './pages/ui/table/dynamicTable'
import UserList from './pages/user/userlist'
// import Home from './pages/router_demo/router1'
// import Router from './pages/router_demo/router2/router'
// import Router from './pages/router_demo/router3/router'
class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/user/userlist" component={UserList}></Route>
                                <Route path="/admin/order/orderlist" component={OrderList}></Route>
                                <Route path="/admin/ui/button" component={Buttons}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/table' component={Tables}></Route>
                                <Route path='/admin/ui/DynamicTables' component={DynamicTables}></Route>
                                <Route component={NoMatch_}></Route>
                            </Switch>
                        </Admin>
                    } ></Route>
                </App>
            </Router>
        )
    }
}
export default IRouter