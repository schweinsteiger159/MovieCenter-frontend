import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Detail from '../pages/detail'
import ListMovie from '../listmovie';
import * as AppConstant from '../contants/constants';

class ShowingMovie extends Component {
    state = {
        films : []
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        fetch(AppConstant.domainURL+'/api/film/showing-movie')
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
                
    
                <ListMovie films={this.state.films} typeFilm="SHOWING"/>
                
                
            </>
        )
    }
}

export default ShowingMovie