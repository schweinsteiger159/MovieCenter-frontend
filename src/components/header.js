import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
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
                                                        <Link className="active" to="./">
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
                                                        <a href="contact.html">Xem xuất chiếu</a>
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
                                                <ul>
                                                    <li>
                                                        <Link to="/customer/login">
                                                            Đăng nhập
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                           Đăng ký
                                                        </a>
                                                    </li>
                                                   
                                                </ul>
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

        )
    }
}
export default Header;