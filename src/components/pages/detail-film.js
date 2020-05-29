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
        fetch(AppConstant.domainURL+'/api/film/findcode/'+this.props.match.params.id)
        .then(res => res.json())
        .then( data => {
          console.log(data)
          this.setState( {film: data} )
        })
        .catch(console.log)
    }
    render(){
        return (
            <>
            <Header></Header>

            <ContentFilm film ={this.state.film} location={this.props.location}/>
            
            <Footer></Footer>
            </>
        )
    }
}
export default DetailFilm;