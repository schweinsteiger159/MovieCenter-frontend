import React, { Component } from 'react';
import Slider from '../slider';
import Header from '../header'
import Footer from '../footer';
import MainHome from '../main-home';

class Home extends Component{
   
    render(){
        window.scrollTo(0, 0)
        console.log("-----render home -----")
        return(
            <>
            <Header></Header>
            <Slider></Slider>
            <MainHome></MainHome>
            
            </>
        )
    }
}
export default Home