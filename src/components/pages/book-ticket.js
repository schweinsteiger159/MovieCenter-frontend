import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Detail from '../pages/detail'
import ListMovie from '../listmovie';

class BookTicket extends Component {

    render(){
        return (
            <>
                <Header />
    
                <div>Book ticket</div>
                
                <Footer />
            </>
        )
    }
}

export default BookTicket