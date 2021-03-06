import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from '../pages/home';
import ShowingMovie from '../pages/showing-movie';
import ComingMovie from '../pages/coming-movie';
import Detail from '../pages/detail'
import AdminFilm from '../pages/AdminFilm';
import BookTicket from '../pages/book-ticket';

class RouterURL extends Component {
    render(){
        return (
            <Router>
                
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/showing-movie" component={ShowingMovie}></Route>
                    <Route path="/coming-movie" component={ComingMovie}></Route>
                    
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/book-ticket" component={BookTicket}></Route>

                    <Route path="/admin/film" component={AdminFilm}></Route>
                
            </Router>
        )
    }
}

export default RouterURL;