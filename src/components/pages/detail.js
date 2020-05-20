import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';
import Header from '../header'
import Footer from '../footer';
import ContentFilm from '../content-film';
import * as AppConstant from '../contants/constants';

class Detail extends Component{
    state = {
        film : {}
    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
        fetch(AppConstant.domainURL+'/api/film/findcode/'+this.props.match.params.id)
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
            

            <ContentFilm film ={this.state.film}/>
            
          
            </>
        )
    }
}

export default Detail;