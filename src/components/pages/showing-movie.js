import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import SignIn from '../signin';
import SingUp from '../signup';
import ListMovie from '../listmovie';

class ShowingMovie extends Component {
    state = {
        films : []
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/film/showing-movie')
        .then(res => res.json())
        .then( data => {
          console.log(data)
          this.setState( {films: data} )
        })
        .catch(console.log)
    }
    render(){
        return (
            <>
                <SignIn />
                <SingUp />
                <Header />
    
                <ListMovie films={this.state.films} typeFilm="SHOWING"/>
    
                <Footer />
            </>
        )
    }
}

export default ShowingMovie