import React, { Component } from 'react';
import Slider from '../slider';
import Header from '../header'
import Footer from '../footer';

class Home extends Component{
   
    render(){
        window.scrollTo(0, 0)
        console.log("-----render home -----")
        return(
            <>
            <Header></Header>
            <Slider></Slider>
            <Footer></Footer>
            </>
        )
    }
}
export default Home