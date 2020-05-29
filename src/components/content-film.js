import React, { Component } from 'react';
import { render } from 'ejs';
import { Redirect, Route, Link } from 'react-router-dom';

import * as AppConstant from './contants/constants';

class ContentFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: [],
            isRedirect: 0
        }
    }

    renderType = types => {
        if (types) {
            return types.map((type, key) => {
                return <a href="#" key={key}>{type.nameType},</a>
            })
        }
    }

    prohibited = (str) => {
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

    buyTicket = (stt) => {
        var user = JSON.parse(localStorage.getItem("client"));
        if (stt === 'SHOWING') {
            return (
                <Link class="genric-btn primary circle" style={{ width: "-webkit-fill-available" }} to="/cinema">Đặt vé</Link>  
            )
        }
    }

    checkLogin = (user) => {
        console.log("clicked");
        console.log(user)
        if (user == null) {
            console.log("user = null")
            this.setState({isRedirect : 1})
        } else {
            this.setState({isRedirect : 3})
        }
    }

    render() {
        // console.log(this.state)
        // var { location } = this.props;
        // console.log(location)
        // if(this.state.isRedirect == 1){
        //     return (
        //         <Redirect to={{
        //             pathname:"/customer/login",
        //             state: {
        //                 from : location
        //             }
        //         }}/>
        //     )
        // }
        // if(this.state.isRedirect == 3){
        //     return (
        //         <Redirect to="/cinema" />
        //     )
        // }
        
        return (
            <>
                <div className="whole-wrap">

                    <div className="container box_1170">
                        <div className="section-top-border">
                            <div className="row">
                                <div className="col-md-3">

                                    <div className="typography">
                                        <img src={"../assets/img/upload/" + this.props.film.image} alt="" class="img-fluid" />
                                    </div>
                                    <br></br>
                                    <div className="mb-20" >
                                        {this.buyTicket(this.props.film.status)}
                                    </div>
                                </div>
                                <div className="col-md-6 mt-sm-30">
                                    <h3 className="mb-20">{this.props.film.namefilm}</h3>
                                    <div className="">
                                        <ul className="unordered-list">
                                            <li>{this.props.film.description}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-sm-30">
                                    <h3 className="mb-20" >Thông tin</h3>
                                    <div className="">
                                        <ul className="unordered-list">
                                            <li><strong>Đạo diễn:</strong> {this.props.film.director}</li>
                                            <li><strong>Diễn viên: </strong>{this.props.film.actor}</li>
                                            <li><strong>Thể loại: </strong>{this.renderType(this.props.film.type)}</li>
                                            <li><strong>Thời lượng: </strong> {this.props.film.time}</li>
                                            <li><strong>Ngày chiếu: </strong> {this.props.film.dateShow}</li>
                                            <li><strong>Phim dành cho: </strong>{this.prohibited(this.props.film.prohibit)}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



            </>
        )
    }
}
export default ContentFilm;