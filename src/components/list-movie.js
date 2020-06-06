import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const ListMovie = (props) => {
    var title = (props.typeFilm === "SHOWING" ? "Phim đang chiếu" : "Phim sắp chiếu");
    console.log(props.films);
    return (
        <div className="popular_places_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb_70">
                            <h3>{title}</h3>
                            <p>
                                Những bộ phim bom tấn không thể bỏ lở
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.films.map((film, key) => (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="single_place">
                                <div className="thumb" >
                                <img src={film.image} alt="" style={{ weight: 100, height: 350 }}/>
                                    <a href="#" className="prise">
                                        {film.status}
                                </a>
                                </div>
                                <div className="place_info">
                                    <Link to={"/detail/"+film.codeFilm}>
                                    <h3>{film.namefilm}</h3>
                                    </Link>
                                    <p>{(film.description) ? film.description.substring(0,50) : ""}...</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                           
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            {film.dateShow}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}





                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="more_place_btn text-center">
                            <a className="boxed-btn4" href="#">
                                More Places
          </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListMovie;