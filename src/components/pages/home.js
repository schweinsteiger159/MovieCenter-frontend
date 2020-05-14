import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SignIn from '../signin';
import SingUp from '../signup';
import Slider from  '../slider';

const Home = () =>{
    return (
        <>
            <SignIn />
            <SingUp />
            <Header />

            <Slider />

            <Footer />
        </>
    )
}

export default Home;