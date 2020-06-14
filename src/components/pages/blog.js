import React, { Component } from 'react';
import Slider from '../slider';
import Header from '../header'
import Footer from '../footer';
import ListBlog from '../list-blog';

class Blog extends Component{
    
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        
        console.log("-----render home -----")
        return(
            <>
            <Header></Header>
            <ListBlog ></ListBlog>
            <Footer></Footer>
            </>
        )
    }
}
export default Blog