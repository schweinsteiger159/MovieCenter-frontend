import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import * as AppConstant from '../contants/constants';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errorMessage: false
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (e) => {
        e.preventDefault();
        var account = {
            "userName": this.state.username,
            "password": this.state.password
        }
        console.log(account)
        this.authenticate(account);
    }

    authenticate(account) {

        axios({
            method: 'POST',
            url: AppConstant.domainURL + "/auth/grantPermission",
            data: account,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                console.log(res)
                AppConstant.saveUser("client", res.data)
                window.location.reload();


            })
            .catch(function (err) {
                console.log(err);
                console.log("Lỗi");
                this.setState({ errorMessage: true })
            }.bind(this));

    }

    validateForm = (stt) => {
        if (stt === true) {
            return (<p style={{ color: "red" }}>* Tài khoản và mật khẩu không đúng</p>)
        }
    }
    render() {
        return (
            <>
                <div className="whole-wrap">
                    <div className="container box_1170">
                        <div className="section-top-border">
                            <h3 className="mb-30">Đăng nhập</h3>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="../assets/img/upload/cinema.jpg" alt className="img-fluid" />
                                </div>
                                <div className="col-md-9 mt-sm-20">
                                <h4>{this.validateForm(this.state.errorMessage)}</h4>
                                    <form onSubmit={this.onLogin}
                                        className="form-contact contact_form"
                                        action="contact_process.php"
                                        method="post"
                                        id="contactForm"
                                        noValidate="novalidate"
                                    >
                                        <div className="row">

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control valid"
                                                        name="username"
                                                        id="username"
                                                        type="text"
                                                        placeholder="Tên đăng nhập"
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control valid"
                                                        name="password"
                                                        id="password"
                                                        type="password"
                                                        placeholder="Mật khẩu"
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <button type="submit" className="button button-contactForm boxed-btn">
                                                Đăng nhập
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Login