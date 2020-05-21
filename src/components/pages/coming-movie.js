import React, { Component } from 'react';
import ListMovie from '../list-movie';
import * as AppConstant from '../contants/constants';

class ComingMovie extends Component{
    state = {
        films : []
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        fetch(AppConstant.domainURL + '/api/film/coming-movie')
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
                
    
                <ListMovie films={this.state.films}  typeFilm="COMING"/>
    
              
            </>
        )
    }
}
export default ComingMovie;