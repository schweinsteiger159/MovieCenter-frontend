import React, { Component } from 'react';
import ListMovie from '../list-movie';
import * as AppConstant from '../contants/constants';
import Header from '../header';
import Footer from '../footer';
import BradcamArea from '../bradcam-area';

class ShowingMovie extends Component{
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
        
        return(
            <>
            <Header></Header>
            <ListMovie films={this.state.films} typeFilm="SHOWING"></ListMovie>
            <Footer></Footer>
            </>
        )
    }
}
export default ShowingMovie;