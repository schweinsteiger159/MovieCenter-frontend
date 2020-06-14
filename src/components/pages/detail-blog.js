import React, { Component } from 'react';
import * as AppConstant from '../contants/constants';
import Header from '../header';
import Footer from '../footer';
import ContentBlog from '../content-blog';

class DetailBlog extends Component{
    render(){
        return (
            <>
            <Header></Header>

            <ContentBlog location={this.props.location}></ContentBlog>
            
            <Footer></Footer>
            </>
        )
    }
}
export default DetailBlog;