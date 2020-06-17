import React, { Component } from 'react';
import { Redirect, Route, Link, useLocation } from 'react-router-dom';

import * as AppConstant from './contants/constants';
import Alert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

class ContentFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: null,
            isRedirect: 0,
            sizeComment: 3,
            indexComment: 0,
            setOpenAlert: false
        }
    }

    componentDidMount() {
        this.loadFilm();
    }

    loadFilm = () => {
        fetch(AppConstant.domainURL + '/api/film/findcode/' + this.props.codeFilm)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ film: data })
            })
            .catch(console.log)
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
                        style={{paddingTop: 30}}
                    >
                        <Snackbar open={this.state.setOpenAlert} autoHideDuration={6000} onClose={() =>this.handleClose()}>
                            <Alert onClose={() => this.handleClose()} severity="success">
                                Bình luận thành công
                            </Alert>
                        </Snackbar>

                        <div className="row">
                            {/* <div className="col-12">
                                <div className="form-group">
                                    <Alert icon={false} id="alert-success" severity="success" style={{ display: 'none' }}>Bình luận thành công</Alert>
                                    <Alert icon={false} id="alert-error" severity="error" style={{ display: 'none' }}>Xãy ra lỗi ! Vui lòng đăng nhập lại</Alert>
                                </div>
                            </div> */}
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
                                        onChange={this.onChangeInput}
                                        required
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
    nextComment = () => {
        if (this.state.indexComment + this.state.sizeComment < this.state.film.comments.length) {
            this.setState({ indexComment: this.state.indexComment + this.state.sizeComment })
        }

    }

    prevComment = () => {
        if (this.state.indexComment > 0) {
            this.setState({ indexComment: this.state.indexComment - this.state.sizeComment })
        }
    }

    onChangeInput = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
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
        fetch(AppConstant.domainURL + '/api/film/comment/' + this.state.film.codeFilm, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data);
                if (data.code === 200) {
                    // document.getElementById("alert-success").style.display = "block";
                    // document.getElementById("alert-error").style.display = "none";
                    this.loadFilm();
                    this.setState({setOpenAlert : true})
                } else {
                    document.getElementById("alert-error").style.display = "block";

                }

            })
            .catch(error => {
                console.log(error)
                // document.getElementById("alert-error").style.display = "block";
                // document.getElementById("alert-success").style.display = "none";
                // this.setState({ data: [{ null: null }] })
            });
    }

    Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ setOpenAlert: false })
    };

    render() {
        console.log(this.state)
        if (this.state.film !== null) {
            return (
                <>
                    <div className="whole-wrap">

                        <div className="container box_1170">
                            <div className="section-top-border">
                                <div className="row">
                                    <div className="col-md-3">

                                        <div className="typography">
                                            <img src={this.state.film.image} alt="" class="img-fluid" />
                                        </div>
                                        <br></br>
                                        <div className="mb-20" >
                                            {this.buyTicket(this.state.film.status)}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-sm-30">
                                        <h3 className="mb-20">{this.state.film.namefilm}</h3>
                                        <div className="">
                                            <ul className="unordered-list">
                                                <li>{this.state.film.description}</li>
                                                <li>
                                                    <h3>Trailer</h3>
                                                </li>
                                            </ul>

                                            <div dangerouslySetInnerHTML={{ __html: this.state.film.trailer }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-sm-30">
                                        <h3 className="mb-20" >Thông tin</h3>
                                        <div className="">
                                            <ul className="unordered-list">
                                                <li><strong>Đạo diễn:</strong> {this.state.film.director}</li>
                                                <li><strong>Diễn viên: </strong>{this.state.film.actor}</li>
                                                <li><strong>Thể loại: </strong>{this.renderType(this.state.film.type)}</li>
                                                <li><strong>Thời lượng: </strong> {this.state.film.time}</li>
                                                <li><strong>Ngày chiếu: </strong> {this.state.film.dateShow}</li>
                                                <li><strong>Phim dành cho: </strong>{this.prohibited(this.state.film.prohibit)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area" style={{ borderTop: 'none', padding: 0 }}>
                                <div class="d-flex align-items-center" style={{ paddingBottom: 20 }}>
                                    <h5 style={{ fontSize: 20 }}>
                                        {this.state.film.comments !== null ? this.state.film.comments.length + " Bình luận" : "Chưa ai bình luận"}
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
                                    this.state.film.comments !== null
                                        ?
                                        this.state.film.comments.map((i, k) => (

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

                            {this.checkLoginToComment()}
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
export default ContentFilm;