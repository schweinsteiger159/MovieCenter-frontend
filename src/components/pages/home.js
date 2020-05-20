import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import SignIn from '../signin';
import SingUp from '../signup';
import Slider from  '../slider';

class Home extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return (
         
                
    
                <Slider />
    
                
            
        )
    }
}

export default Home;