import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRedirect: 0,
            isLogOut: false,
            show: false
        }
    }
    checkLogin = () => {
        var user = JSON.parse(localStorage.getItem("client"));
        var btnRight = "";
        if (user == null) {
            return (
                <ul>
                    <li>
                        <Link to="/customer/login">
                            Đăng nhập
                         </Link>
                    </li>
                    <li>
                        <Link to="/customer/register">
                            Đăng ký
                        </Link>
                    </li>

                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        {user.username}
                    </li>
                    <li>
                        <a href="#" onClick={this.handleShow}>
                            Đăng xuất
                        </a>
                    </li>

                </ul>
            )
        }
    }

    logOut = () => {
        console.log("log out")
        localStorage.removeItem("client");
        this.setState({ isLogOut: true })
    }


    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };
    render() {
        if (this.state.isLogOut) {
            return (
                <Redirect to="/customer/login" />
            )
        }
        console.log(this.state)
        
        return (

            <>
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid">
                                <div className="header_bottom_border">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="logo">
                                                <Link to="/">
                                                    <p style={{
                                                        fontFamily: '"Nothing You Could Do", cursive',
                                                        textAlign: "center",
                                                        fontSize: 60
                                                    }}>Cinema</p>

                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li>
                                                            <Link className="" to="./">
                                                                Trang chủ
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                Phim <i className="ti-angle-down" />
                                                            </a>
                                                            <ul className="submenu">
                                                                <li>
                                                                    <Link to="/showing-movie">
                                                                        Phim đang chiếu
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/coming-movie">Phim sắp chiếu</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="/cinema">Xem xuất chiếu</Link>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                blog <i className="ti-angle-down" />
                                                            </a>
                                                            <ul className="submenu">
                                                                <li>
                                                                    <a href="blog.html">blog</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-blog.html">single-blog</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                                            <div className="social_wrap d-flex align-items-center justify-content-end">

                                                <div className="social_links d-none d-xl-block">
                                                    {this.checkLogin()}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Body>Bạn có muốn đăng xuất?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Quay lại
              </Button>
                        <Button variant="primary" onClick={this.logOut}>
                            Đăng xuất
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Header;