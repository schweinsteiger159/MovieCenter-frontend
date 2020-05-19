import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import * as AppConstant from '../components/contants/constants';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errorMessage: false
    }
  }

  onChange = (e) => {
    console.log("onChange");
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
    console.log(account);

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
      })
      .catch(function (err) {
        console.log(err);
        console.log("Lỗi");
        this.setState({errorMessage : true})
      }.bind(this));

  }

  validateForm = (stt) => {
    if(stt === true){
      return(<p style={{ color: "red" }}>* Tài khoản và mật khẩu không đúng</p>)
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <a href="#" className="close">x</a>
          <h3>Login</h3>
          {this.validateForm(this.state.errorMessage)}
          <form method="post" action="#" onSubmit={this.onLogin}>
            <div className="row">
              <label htmlFor="username">
                Username:
              <input onChange={this.onChange} type="text" name="username" id="username" required="required" />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">
                Password:
              <input onChange={this.onChange} type="password" name="password" id="password" required="required" />
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" defaultValue="Remember me" /><span>Remember me</span>
                </div>
                <a href="#">Forget password ?</a>
              </div>
            </div>
            <div className="row">
              <button type="submit">Đăng nhập</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#"><i className="ion-social-facebook" />Facebook</a>
              <a className="tw" href="#"><i className="ion-social-twitter" />twitter</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;