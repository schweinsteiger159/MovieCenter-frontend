import React from 'react';

function Form_login(){
    return(
      <div className="login-content">
      <a href="!#" className="close">x</a>
      <h3>Đăng nhập</h3>
      <form method="post" action="!#">
        <div className="row">
          <label htmlFor="username">
            Tên đăng nhập:
            <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
          </label>
        </div>
        <div className="row">
          <label htmlFor="password">
            Mật khẩu:
            <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
          </label>
        </div>
        <div className="row">
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
    );
}

export default Form_login;