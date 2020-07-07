import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import * as AppConstant from '../components/contants/constants'
import {
    BrowserRouter as Router,
    Link, Route,
    useLocation,
} from "react-router-dom";
import axios from "axios"
import Login from "../components/pages/login"

import Alert from '@material-ui/lab/Alert';

class ContentBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: null,
            random: null,
            comment: null,
            sizeComment: 3,
            indexComment: 0,
        }
    }

    loadBlog = () => {
        fetch(AppConstant.domainURL + '/api/blog/code/' + this.props.codeBlog)
            .then(res => res.json())
            .then(data => {
                this.setState({ blog: data.data })
            })
            .catch(console.log)
    }

    componentDidMount() {
        fetch(AppConstant.domainURL + '/api/blog/code/' + this.props.codeBlog)
            .then(res => res.json())
            .then(data => {
                this.setState({ blog: data.data })

            })
            .catch(console.log)
        fetch(AppConstant.domainURL + '/api/blog/random/4')
            .then(res => res.json())
            .then(data => {
                this.setState({ random: data })
            })
            .catch(console.log)


    }

    checkLoginToComment = () => {
        var client = JSON.parse(localStorage.getItem("client"));
        if (client !== null) {

            return (
                <>
                    <form
                        className="form-contact comment_form"
                        action="#"
                        id="commentForm"
                        onSubmit={this.onSubmitComment}
                        style={{marginBottom : 100}}
                    >

                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <Alert icon={false} id="alert-success" severity="success" style={{ display: 'none' }}>Bình luận thành công</Alert>
                                    <Alert icon={false} id="alert-error" severity="error" style={{ display: 'none' }}>Xãy ra lỗi ! Vui lòng đăng nhập lại</Alert>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea
                                        className="form-control w-100"
                                        name="comment"
                                        id="comment"
                                        cols={30}
                                        rows={9}
                                        placeholder="Write Comment"
                                        defaultValue={""}
                                        required
                                        onChange={(e) => this.setState({ comment: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="button button-contactForm btn_1 boxed-btn"
                                    >
                                        Bình luận
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <p style={{ float: 'right' }}>Tên đăng nhập: <strong >{client.username}</strong></p>
                            </div>

                        </div>

                    </form>
                </>
            )
        } else {
            var { location } = this.props;
            return (

                <>
                    <Alert severity="error">* Đăng nhập để bình luận <Link style={{ color: 'blue' }} to={{
                        pathname: "/customer/login",
                        state: {
                            from: location
                        }
                    }}>
                        Đăng nhập
                    </Link>

                    </Alert>

                </>
            )
        }
    }

    onSubmitComment = (e) => {
        e.preventDefault();
        console.log("submit")
        var client = JSON.parse(localStorage.getItem("client"));
        var item = {
            username: client.username,
            content: this.state.comment
        }
        console.log(item)
        fetch(AppConstant.domainURL + '/api/blog/comment/' + this.props.codeBlog, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': client.token
            },
            body: JSON.stringify(item)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data);
                if (data.code === 200) {
                    document.getElementById("alert-success").style.display = "block";
                    document.getElementById("alert-error").style.display = "none";
                    this.loadBlog(this.props.codeBlog);

                } else {
                    document.getElementById("alert-error").style.display = "block";

                }

            })
            .catch(error => {
                console.log(error)
                document.getElementById("alert-error").style.display = "block";
                document.getElementById("alert-success").style.display = "none";
                // this.setState({ data: [{ null: null }] })
            });
    }

    nextComment = () => {
        if (this.state.indexComment + this.state.sizeComment < this.state.blog.comments.length) {
            this.setState({ indexComment: this.state.indexComment + this.state.sizeComment })
        }

    }

    prevComment = () => {
        if (this.state.indexComment > 0) {
            this.setState({ indexComment: this.state.indexComment - this.state.sizeComment })
        }
    }

    render() {
        console.log(this.props.codeBlog)
        //loadBlog(codeBlog)
        console.log(this.state)
        if (this.state.blog !== null && this.state.random !== null) {
            if (this.props.codeBlog !== this.state.blog.code) {
                window.scrollTo(0, 0)
                this.loadBlog();
            }
            var item = this.state.blog
            var random = this.state.random
            console.log(item)
            console.log(random)
            return (
                <>
                    <section className="blog_area single-post-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 posts-list">
                                    <div className="single-post">

                                        <div className="blog_details">
                                            <h2>
                                                {item.title}
                                            </h2>
                                            <div dangerouslySetInnerHTML={{ __html: item.content }}>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="navigation-top">
                                        <div className="d-sm-flex justify-content-between text-center">
                                            <p className="like-info">

                                            </p>
                                            <div className="col-sm-4 text-center my-2 my-sm-0">

                                            </div>
                                            <ul className="social-icons">

                                                <li>
                                                    {item.createdBy}
                                                </li>
                                                <li>
                                                    {item.createdAt}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="comments-area" style={{ borderTop: 'none', padding: 0 }}>

                                        <div class="d-flex align-items-center" style={{ paddingBottom: 20 }}>
                                            <h5 style={{ fontSize: 20 }}>
                                                {item.comments !== null ? item.comments.length + " Bình luận" : "Chưa ai bình luận"}
                                            </h5>
                                            <ul className="pagination">
                                                <li className="page-item">

                                                    <a onClick={() => this.prevComment()}
                                                        style={{ cursor: 'pointer' }} className="page-link" aria-label="Previous" style={{ border: 'none' }}>
                                                        <i className="ti-angle-left" />
                                                    </a>
                                                </li>

                                                <li className="page-item">
                                                    <a onClick={() => this.nextComment()}
                                                        style={{ cursor: 'pointer' }} className="page-link" aria-label="Next" style={{ border: 'none' }}>
                                                        <i className="ti-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {
                                            item.comments !== null
                                                ?
                                                item.comments.map((i, k) => (

                                                    this.state.indexComment + this.state.sizeComment > k && this.state.indexComment <= k
                                                        ?
                                                        <>

                                                            <div className="comment-list">
                                                                <div className="single-comment justify-content-between d-flex">
                                                                    <div className="user justify-content-between d-flex">

                                                                        <div className="desc">
                                                                            <p className="comment">
                                                                                {i.content}
                                                                            </p>
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="d-flex align-items-center">
                                                                                    <h5>
                                                                                        <a>{i.username}</a>
                                                                                    </h5>
                                                                                    <p className="date">
                                                                                        {i.createdAt}
                                                                                    </p>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                        </>

                                                ))

                                                :
                                                <>
                                                </>
                                        }


                                    </div>
                                    <div className="comment-form" style={{ borderTop: "0px", paddingTop: 0, marginTop: 0 }}
                                    >
                                        {this.checkLoginToComment()}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog_right_sidebar">
                                        <aside className="single_sidebar_widget search_widget">
                                            <form action="#">
                                                <div className="form-group">
                                                    <div className="input-group mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search Keyword"
                                                            onfocus="this.placeholder = ''"
                                                            onblur="this.placeholder = 'Search Keyword'"
                                                        />
                                                        <div className="input-group-append">
                                                            <button className="btn" type="button">
                                                                <i className="ti-search" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit"
                                                >
                                                    Search
                                                        </button>
                                            </form>
                                        </aside>

                                        <aside className="single_sidebar_widget popular_post_widget">
                                            <h3 className="widget_title">Bài viết liên quan</h3>
                                            {
                                                random.map((i, k) => (
                                                    <div className="media post_item">
                                                        <img className="thumbnail" src={i.thumbnail} alt="post" />
                                                        <div className="media-body">
                                                            <Link style={{ cursor: 'pointer' }} to={"/blog-detail?code=" + i.code}>
                                                                <h3>{(i.title) ? i.title.substring(0, 50) : ""}...</h3>
                                                            </Link>
                                                            <p>{i.createdAt}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </aside>
                                        <aside className="single_sidebar_widget newsletter_widget">
                                            <h4 className="widget_title">Newsletter</h4>
                                            <form action="#">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email'"
                                                        placeholder="Enter email"
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit"
                                                >
                                                    Subscribe
                                                        </button>
                                            </form>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }
    }

    // if (this.state.blog !== null && this.state.random !== null) {
    //     var item = this.state.blog;
    //     var random = this.state.random;
    //     return (
    //         <>
    //             <section className="blog_area single-post-area section-padding">
    //                 <div className="container">
    //                     <div className="row">
    //                         <div className="col-lg-8 posts-list">
    //                             <div className="single-post">

    //                                 <div className="blog_details">
    //                                     <h2>
    //                                         {item.title}
    //                                     </h2>
    //                                     <div dangerouslySetInnerHTML={{ __html: item.content }}>
    //                                     </div>

    //                                 </div>
    //                             </div>
    //                             <div className="navigation-top">
    //                                 <div className="d-sm-flex justify-content-between text-center">
    //                                     <p className="like-info">

    //                                     </p>
    //                                     <div className="col-sm-4 text-center my-2 my-sm-0">

    //                                     </div>
    //                                     <ul className="social-icons">

    //                                         <li>
    //                                             {item.createdBy}
    //                                         </li>
    //                                         <li>
    //                                             {item.createdAt}
    //                                         </li>
    //                                     </ul>
    //                                 </div>

    //                             </div>

    //                             <div className="comments-area">
    //                                 <h4>{item.comments !== null ? item.comments.length + " Bình luận" : "Chưa ai bình luận"}</h4>
    //                                 {
    //                                     item.comments !== null
    //                                         ?
    //                                         item.comments.map((i, k) => (
    //                                             <>
    //                                                 <div className="comment-list">
    //                                                     <div className="single-comment justify-content-between d-flex">
    //                                                         <div className="user justify-content-between d-flex">

    //                                                             <div className="desc">
    //                                                                 <p className="comment">
    //                                                                     {i.content}
    //                                                                 </p>
    //                                                                 <div className="d-flex justify-content-between">
    //                                                                     <div className="d-flex align-items-center">
    //                                                                         <h5>
    //                                                                             <a>{i.username}</a>
    //                                                                         </h5>
    //                                                                         <p className="date">
    //                                                                             {i.createdAt}
    //                                                                         </p>
    //                                                                     </div>

    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </>
    //                                         ))

    //                                         :
    //                                         <>
    //                                         </>
    //                                 }



    //                             </div>
    //                             <div className="comment-form">
    //                                 <h4>Bình luận chém gió</h4>
    //                                 {this.checkLoginToComment()}
    //                             </div>
    //                         </div>
    //                         <div className="col-lg-4">
    //                             <div className="blog_right_sidebar">
    //                                 <aside className="single_sidebar_widget search_widget">
    //                                     <form action="#">
    //                                         <div className="form-group">
    //                                             <div className="input-group mb-3">
    //                                                 <input
    //                                                     type="text"
    //                                                     className="form-control"
    //                                                     placeholder="Search Keyword"
    //                                                     onfocus="this.placeholder = ''"
    //                                                     onblur="this.placeholder = 'Search Keyword'"
    //                                                 />
    //                                                 <div className="input-group-append">
    //                                                     <button className="btn" type="button">
    //                                                         <i className="ti-search" />
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <button
    //                                             className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
    //                                             type="submit"
    //                                         >
    //                                             Search
    //                                             </button>
    //                                     </form>
    //                                 </aside>

    //                                 <aside className="single_sidebar_widget popular_post_widget">
    //                                     <h3 className="widget_title">Bài viết liên quan</h3>
    //                                     {
    //                                         random.map((i, k) => (
    //                                             <div className="media post_item">
    //                                                 <img className="thumbnail" src={i.thumbnail} alt="post" />
    //                                                 <div className="media-body">
    //                                                     <Link style={{ cursor: 'pointer' }} to={"/blog-detail?code=" + i.code}>
    //                                                         <h3>{(i.title) ? i.title.substring(0, 50) : ""}...</h3>
    //                                                     </Link>
    //                                                     <p>{i.createdAt}</p>
    //                                                 </div>
    //                                             </div>
    //                                         ))
    //                                     }
    //                                 </aside>
    //                                 <aside className="single_sidebar_widget newsletter_widget">
    //                                     <h4 className="widget_title">Newsletter</h4>
    //                                     <form action="#">
    //                                         <div className="form-group">
    //                                             <input
    //                                                 type="email"
    //                                                 className="form-control"
    //                                                 onfocus="this.placeholder = ''"
    //                                                 onblur="this.placeholder = 'Enter email'"
    //                                                 placeholder="Enter email"
    //                                                 required
    //                                             />
    //                                         </div>
    //                                         <button
    //                                             className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
    //                                             type="submit"
    //                                         >
    //                                             Subscribe
    //                                             </button>
    //                                     </form>
    //                                 </aside>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>

    //         </>
    //     )
    // } else {
    //     return (
    //         <h1>Loading</h1>
    //     )
    // }
}

export default ContentBlog;