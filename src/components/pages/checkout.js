import React, { Component } from 'react';
import Header from '../header'
import Footer from '../footer';
import Payment from '../payment';

class CheckOut extends Component{
    
    componentDidMount(){
        
    }

    render(){
        window.scrollTo(0, 0)
        console.log("-----render home -----")
        return(
            <>
            <Header></Header>
            <Payment></Payment>
            <Footer></Footer>
            </>
        )
    }
}
export default CheckOut