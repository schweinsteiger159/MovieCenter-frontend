import React, { Component } from 'react';
import * as AppConstant from '../components/contants/constants'

import { Redirect, Route, Link } from 'react-router-dom';

import MediaCard from '../components/card'

class MainHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coming: null,
            showing: null,
            blog: null,
        }
    }

    componentDidMount() {
        this.loadComingMovie();
        this.loadBlog();
        this.loadShowingMovie();
    }

    loadComingMovie = () => {
        fetch(AppConstant.domainURL + '/api/film/coming-movie')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ coming: data })
            })
            .catch(console.log)
    }

    loadShowingMovie = () => {
        fetch(AppConstant.domainURL + '/api/film/showing-movie')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ showing: data })
            })
            .catch(console.log)
    }

    loadBlog = () => {
        fetch(AppConstant.domainURL + '/api/blog/all')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ blog: data })
            })
            .catch(console.log)
    }

    render() {
        console.log(this.state)

        if (this.state.showing !== null && this.state.coming !== null && this.state.blog !== null) {
            return (
                <>
                    <div className="popular_places_area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section_title text-center mb_70">
                                        <h3>Phim đang chiếu</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.state.showing.map((i, k) => (
                                        (
                                            k < 3
                                                ?
                                                <div className="col-lg-4 col-md-6" key={k}>
                                                    <div className="single_place">
                                                        <div className="thumb">
                                                            <img src={i.image} alt />
                                                        </div>
                                                        <div className="place_info">
                                                            <div style={{ height: 50 }}>
                                                                <Link to={"/detail/" + i.codeFilm}>
                                                                    <h3>{i.namefilm}</h3>
                                                                </Link>
                                                            </div>

                                                            <p>{(i.description) ? i.description.substring(0, 50) : ""}...</p>
                                                            <p><strong>Thời lượng:</strong> {i.time}</p>
                                                            <p><strong>Thể loại:</strong> {i.type.map(j => (j.nameType + ", "))}</p>
                                                            <div className="rating_days d-flex justify-content-between">
                                                                <span className="d-flex justify-content-center align-items-center">

                                                                    <a>({i.comments === null ? "0" : i.comments.length} Bình luận)</a>
                                                                </span>
                                                                <div className="days">
                                                                    <i className="fa fa-clock-o" />
                                                                    {i.dateShow}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                </>
                                        )

                                    ))
                                }



                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="more_place_btn text-center">
                                        <Link className="boxed-btn4" to="/showing-movie">
                                            Xem thêm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular_places_area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section_title text-center mb_70">
                                        <h3>Phim sắp chiếu
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.state.coming.map((i, k) => (
                                        (
                                            k < 3
                                                ?
                                                <div className="col-lg-4 col-md-6" key={k}>
                                                    <div className="single_place">
                                                        <div className="thumb">
                                                            <img src={i.image} alt />
                                                        </div>
                                                        <div className="place_info">
                                                            <div style={{ height: 50 }}>
                                                                <Link to={"/detail/" + i.codeFilm}>
                                                                    <h3>{i.namefilm}</h3>
                                                                </Link>
                                                            </div>

                                                            <p>{(i.description) ? i.description.substring(0, 50) : ""}...</p>
                                                            <p><strong>Thời lượng:</strong> {i.time}</p>
                                                            <p><strong>Thể loại:</strong> {i.type.map(j => (j.nameType + ", "))}</p>
                                                            <div className="rating_days d-flex justify-content-between">
                                                                <span className="d-flex justify-content-center align-items-center">

                                                                    <a>({i.comments === null ? "0" : i.comments.length} Bình luận)</a>
                                                                </span>
                                                                <div className="days">
                                                                    <i className="fa fa-clock-o" />
                                                                    {i.dateShow}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                </>
                                        )

                                    ))
                                }
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="more_place_btn text-center">
                                        <Link className="boxed-btn4" to="/coming-movie">
                                            Xem thêm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="recent_trip_area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section_title text-center mb_70">
                                        <h3>Tin tức</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.state.blog.map((i, k) => (
                                        (
                                            k < 3
                                                ?
                                                <div className="col-lg-4 col-md-6" key={k}>
                                                    <div className="single_trip">
                                                        <div className="thumb">
                                                            <img src={i.thumbnail} alt />
                                                        </div>
                                                        <div className="info">
                                                            <div className="date">
                                                                <span>Oct 12, 2019</span>
                                                            </div>
                                                            <a href="#">
                                                                <h3>{i.title}</h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <>
                                                </>
                                        )

                                    ))
                                }



                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="more_place_btn text-center">
                                        <Link className="boxed-btn4" to="/blog">
                                            Xem thêm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }

    }
}
export default MainHome;