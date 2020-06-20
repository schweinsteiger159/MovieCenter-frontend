import React, { Component } from 'react';
import Header from '../header'
import Footer from '../footer';
import ListCoupon from '../list-coupon';

class Coupon extends Component {

    render(){
        return(
            <>
            <Header></Header>
            <ListCoupon></ListCoupon>
            <Footer></Footer>
            </>
        )
    }

}
export default Coupon