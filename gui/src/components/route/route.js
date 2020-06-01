import React, { Component } from 'react'
import { } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
// import Register from '../../containers/pages/SignUp/Register'
// import Login from '../../containers/pages/SignIn/Login'
// import Dashboard from '../../containers/pages/Dashboard/Dashboard'
import Home from '../../containers/pages/Home/Home'
import About from '../../containers/pages/About/About'
import Portofolio from '../../containers/pages/Portofolio/Portofolio'
import Landing from '../../containers/pages/Landing/Landing'

class MainRouter extends Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <Switch>
                    <Route path="/" component={Landing} />
                    <Route path="/portofolio" component={Portofolio} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    {/* ini route */}
                    {/* <Route path="/register" component={Register} /> */}
                    {/* <Route path="/login" component={Login} /> */}
                    {/* <Route path="/landing" component={Landing} /> */}
                </Switch>
            </div >
        )
    };
}

export default MainRouter;