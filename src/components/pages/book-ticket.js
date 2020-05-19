import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Detail from '../pages/detail'
import ListMovie from '../listmovie';
import BookTicketContent from '../book-ticket-content'

class BookTicket extends Component {

    render(){
        return (
            <>
                <Header />
    
                <BookTicketContent />
    
                <Footer />
            </>
        )
    }

}

export default BookTicket