import React from 'react';

function Form_register(){
    return(
        <div className="login-content">
          <a href="!#" className="close">x</a>
          <h3>Đăng ký</h3>
          <div id="alert" className="alert" style={{display: 'none'}}>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
          </div>
          <form id="submit-account">
            <div className="row">
              <label htmlFor="username-2">
                Tên tài khoản:
                <input type="text" name="username" id="username-2" required="required" />
              </label>
            </div>
            <div className="row">
              <label htmlFor="fullname-2">
                Họ và tên:
                <input type="text" name="fullname" id="fullname-2" required="required" />
              </label>
            </div>
            <div className="row">
              <label htmlFor="email-2">
                Email:
                <input type="email" name="email" id="email-2" required="required" />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password-2">
                Mật khẩu:
                <input type="password" name="password" id="password-2" required="required" />
              </label>
            </div>
            <div className="row">
              <label htmlFor="repassword-2">
                Nhập lại mật khẩu:
                <input type="password" name="password" id="repassword-2" required="required" />
              </label>
            </div>
            <div className="row">
              <button type="submit">Đăng ký</button>
            </div>
          </form>
        </div>
        );
}

export default Form_register;