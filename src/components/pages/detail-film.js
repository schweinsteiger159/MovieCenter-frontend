import React, { Component } from 'react';
import * as AppConstant from '../contants/constants';
import ContentFilm from '../content-film'

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
        console.log(this.props)
        return (
            <>
            

            <ContentFilm film ={this.state.film}/>
            
          
            </>
        )
    }
}
export default DetailFilm;