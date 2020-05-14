import React from 'react';

const Header = () => {
    return (
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
            <a href="index-2.html"><img className="logo" src="../assets/images/logo1.png" alt="" width={119} height={58} /></a>
          </div>
          
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top" />
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  Trang chủ 
                </a>
              </li>	
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  Phim<i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu level1">
                 
                  <li><a href="showing-movie">Phim đang chiếu</a></li>
                  <li><a href="coming-movie">Phim sắp chiếu</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  celebrities <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                  <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                  <li><a href="celebritylist.html">celebrity list</a></li>
                  <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  news <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="bloglist.html">blog List</a></li>
                  <li><a href="bloggrid.html">blog Grid</a></li>
                  <li className="it-last"><a href="blogdetail.html">blog Detail</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  community <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                  <li><a href="userfavoritelist.html">user favorite list</a></li>
                  <li><a href="userprofile.html">user profile</a></li>
                  <li className="it-last"><a href="userrate.html">user rate</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  pages <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="landing.html">Landing</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                </ul>
              </li>                
              <li><a href="#">Help</a></li>
              <li className="loginLink"><a href="#">LOG In</a></li>
              <li className="btn signupLink"><a href="#">sign up</a></li>
            </ul>
          </div>
        </nav>
      
      </div>
    </header>

    )
}
export default Header;