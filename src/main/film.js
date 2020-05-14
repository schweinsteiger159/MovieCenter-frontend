import React, {Component} from 'react';
import Slider from '../components/slider-menu';

class film extends Component{
    state = {
        films : []
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/film/getall')
        .then(res => res.json())
        .then( data => {
          console.log(data)
          this.setState( {contacts: data} )
        })
        .catch(console.log)
    }

    render(){
        return (
            <Slider films={this.state.films} />
        )
    }
}

export default film