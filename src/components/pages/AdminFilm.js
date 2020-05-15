import React, {Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import ListMovie from '../listmovie';
import ManageFilm from '../ManageFilm';
class AdminFilm extends Component {
    
    state = {
        films : []
    }
    componentDidMount(){
        fetch('http://localhost:8080/api/film/getall')
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
                <Header />
    
                <ManageFilm films={this.state.films} />
    
                <Footer />
            </>
        )
    }
}

export default AdminFilm