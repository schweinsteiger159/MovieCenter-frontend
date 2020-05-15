import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';
import Header from '../header'
import Footer from '../footer';
import ContentFilm from '../content-film';

class Detail extends Component{
    state = {
        film : {}
    }
    
    componentDidMount(){
        fetch('http://localhost:8080/api/film/findcode/'+this.props.match.params.id)
        .then(res => res.json())
        .then( data => {
          console.log(data)
          this.setState( {film: data} )
        })
        .catch(console.log)
    }
    render(){
        console.log(this.props)
        return (
            <>
            <Header />

            <ContentFilm film ={this.state.film}/>
            
            <Footer />
            </>
        )
    }
}

export default Detail;