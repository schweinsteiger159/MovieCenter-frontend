import React, { Component } from 'react';
import { render } from 'ejs';
import { Redirect, Route } from 'react-router-dom';

const ContentFilm = (props) => {

    var name = props.film.namefilm;
    var types = props.film.type;

    console.log("----------RENDER-----------");
    console.log(types);

    const renderType = types => {
        if (types) {
            return types.map((type, key) => {
                return <a href="#" key={key}>{type.nameType},</a>
            })
        }
    }

    const prohibited = (str) => {
        if (str === "ALL") {
            return "Tất cả mọi người"
        }
        if (str === "UNDER13") {
            return "Cấm trẻ người dưới 13 tuổi"
        }
        if (str === "UNDER16") {
            return "Cấm trẻ người dưới 16 tuổi"
        }
        if (str === "UNDER18") {
            return "Cấm người dưới 18 tuổi"
        }
    }

    const buyTicket = (stt) => {
        var user = JSON.parse(localStorage.getItem("client"));
        if (stt === 'SHOWING') {

            return (
                <button type="button" onClick={() => checkLogin(user)} class="genric-btn primary circle" style={{ width: "-webkit-fill-available" }}>Đặt vé</button>
            )
        }
    }

    const checkLogin = (user) => {
        console.log("clicked");
        console.log(user)
        if (user == null) {
            console.log("user = null")
            return (
                <Redirect to="/customer/login" />
            )
        } else {
            alert("12")
        }
    }

    return (

        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    <div className="row">
                        <div className="col-md-3">

                            <div className="typography">
                                <img src={"../assets/img/upload/" + props.film.image} alt="" class="img-fluid" />
                            </div>
                            <br></br>
                            <div className="mb-20" >
                                {buyTicket(props.film.status)}
                            </div>
                        </div>
                        <div className="col-md-6 mt-sm-30">
                            <h3 className="mb-20">{name}</h3>
                            <div className="">
                                <ul className="unordered-list">
                                    <li>{props.film.description}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 mt-sm-30">
                            <h3 className="mb-20" >Thông tin</h3>
                            <div className="">
                                <ul className="unordered-list">
                                    <li><strong>Đạo diễn:</strong> {props.film.director}</li>
                                    <li><strong>Diễn viên: </strong>{props.film.actor}</li>
                                    <li><strong>Thể loại: </strong>{renderType(types)}</li>
                                    <li><strong>Thời lượng: </strong> {props.film.time}</li>
                                    <li><strong>Ngày chiếu: </strong> {props.film.dateShow}</li>
                                    <li><strong>Phim dành cho: </strong>{prohibited(props.film.prohibit)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>




    )
}
export default ContentFilm;