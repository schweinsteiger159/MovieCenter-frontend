import React, { useState, useEffect, Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import * as AppConstant from '../contants/constants';
import Header from '../header';
import Footer from '../footer';
import ContentBlog from '../content-blog';
import { render } from 'ejs';


class DetailBlog extends Component {
    useQuery = () => {
        return new URLSearchParams(window.location.search)
    }
    componentDidMount(){
        
    }
    render() {
        window.scrollTo(0, 0)
        let query = this.useQuery();
        console.log(query.get("code"))
        return (
            <>
                <Header></Header>

                <ContentBlog codeBlog={query.get("code")} location={this.props.location}/>

                <Footer></Footer>
            </>
        )
    }
}
export default DetailBlog;