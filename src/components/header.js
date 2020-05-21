import React from 'react';
import SignIn from './signin';
import SingUp from './signup';
import { Link } from 'react-router-dom';

const Header = () => {





  console.log("header");

  function checkLogin() {
    console.log("------------check login-------------")
    var user = JSON.parse(localStorage.getItem("client"));
    console.log(user);
    if (user == null) {
      return (
        <ul className="nav navbar-nav flex-child-menu menu-right">
          <li className=""><Link to="/customer/login">Đăng nhập</Link></li>
          <li className="btn"><Link href="#">Đăng ký</Link></li>
        </ul>
      )
    }else{
      return (
        <ul className="nav navbar-nav flex-child-menu menu-right">
          <li className=""><a href="#">{user.username}</a></li>
          <li className=""><a href="#">Đăng xuất</a></li>
        </ul>
      )
    }
  }
  return (

    <>
{/*      
      <SignIn />
      <SingUp /> */}
      <header className="ht-header full-width-hd">
        <div className="row">
          <nav id="mainNav" className="navbar navbar-default navbar-custom">

            <div className="navbar-header logo">
              <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <Link to="/"><img className="logo" src="../assets/images/logo1.png" alt="" width={119} height={58} /></Link>
            </div>

            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top" />
                </li>
                <li className="dropdown first">
                  <Link className="btn btn-default dropdown-toggle lv1" to="/">
                    Trang chủ
                </Link>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    Phim<i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <ul className="dropdown-menu level1">

                    <li><Link to="/showing-movie">Phim đang chiếu</Link></li>
                    <li><Link to="/coming-movie">Phim sắp chiếu</Link></li>
                  </ul>
                </li>



              </ul>
              {checkLogin()}
            </div>
          </nav>

        </div>
      </header>
    </>
  )
}
export default Header;