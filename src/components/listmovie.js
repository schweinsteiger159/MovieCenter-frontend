import React from 'react';
import {BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';
const ListMovie = (props) => {
    var title = (props.typeFilm === "SHOWING" ? "Phim đang chiếu" : "Phim sắp chiếu" ); 
    console.log(props.films);
    return (
        <>
            <div>
                <div className="hero common-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                    <h1>{title}</h1>
                                    <ul className="breadcumb">
                                        <li className="active"><a href="#">Home</a></li>
                                        <li> <span className="ion-ios-arrow-right" />{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="flex-wrap-movielist">

                                    {props.films.map( (film, key) => ( 
                                        
                                        <div className="movie-item-style-2 movie-item-style-1" key = {key}>
                                        <img src={"../assets/images/film/" +film.image} alt="" />
                                        <div className="hvr-inner">
                                        <Link to={"/detail/" + film.codeFilm}>Chi tiết</Link>
                                        </div>
                                        <div className="mv-item-infor">
                                            <h6><Link to={"/detail/" + film.codeFilm}>{film.namefilm}</Link></h6>
                                            
                                            <p className="rate"><i className="ion-android-star" /><span>{film.rating}</span> /10</p>
                                        </div>
                                    </div>
                                    ) )}
                                    


                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListMovie