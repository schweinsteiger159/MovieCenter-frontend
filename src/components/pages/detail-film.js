import React, { Component } from 'react';
import * as AppConstant from '../contants/constants';
import ContentFilm from '../content-film'
import Header from '../header';
import Footer from '../footer';

class DetailFilm extends Component{
    state = {
        film : {}
    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
        
    }
    render(){
        return (
            <>
            <Header></Header>

            <ContentFilm codeFilm ={this.props.match.params.id} location={this.props.location}/>
            
           
            </>
        )
    }
}
export default DetailFilm;