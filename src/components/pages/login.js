import React, { Component } from 'react';
import SignIn from '../signin';
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
                <div className="hero user-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                    <h1>Đăng nhập</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <div className="form-style-1 user-pro" action="#">
                                    <form action="#" className="user" onSubmit={this.onLogin}>
                                        <h4>{this.validateForm(this.state.errorMessage)}</h4>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Tên đăng nhập</label>
                                                <input type="text" name="username" onChange={this.onChange} required="required" />
                                            </div>
                                            <div className="col-md-6 form-it">
                                                <label>Mật khẩu</label>
                                                <input type="password" name="password" onChange={this.onChange} required="required" />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-2">
                                                <input className="submit" type="submit" defaultValue="save" />
                                            </div>
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