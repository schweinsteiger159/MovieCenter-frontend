import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import ScreenBox from '../screen-box';
class SelectSeat extends Component{

    render(){
        return(
            <>
                <Header></Header>

                <ScreenBox></ScreenBox>
                <Footer></Footer>
            </>
        )
    }
}

export default SelectSeat;