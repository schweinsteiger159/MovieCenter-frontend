import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../pages/home';
import ShowingMovie from '../pages/showing-movie';
import ComingMovie from '../pages/coming-movie';

class RouterURL extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/showing-movie" component={ShowingMovie}></Route>
                    <Route path="/coming-movie" component={ComingMovie}></Route>
                </div>
            </Router>
        )
    }
}

export default RouterURL;