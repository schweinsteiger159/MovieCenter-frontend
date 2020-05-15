import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from '../pages/home';
import ShowingMovie from '../pages/showing-movie';
import ComingMovie from '../pages/coming-movie';
import Detail from '../pages/detail'
import AdminFilm from '../pages/AdminFilm';

class RouterURL extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/showing-movie" component={ShowingMovie}></Route>
                    <Route path="/coming-movie" component={ComingMovie}></Route>
                    
                    <Route path="/detail/:id" component={Detail}></Route>
                    

                    <Route path="/admin/film" component={AdminFilm}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterURL;