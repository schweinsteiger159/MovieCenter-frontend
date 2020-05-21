import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
  <div className="footer_top">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-md-6 col-lg-4 ">
          <div className="footer_widget">
            <div className="footer_logo">
              <a href="!#">
                <img src="../assets/img/footer_logo.png" alt="" />
              </a>
            </div>
            <p>
              5th flora, 700/D kings road, green <br /> lane New York-1782{" "}
              <br />
              <a href="!#">+10 367 826 2567</a> <br />
              <a href="!#">contact@carpenter.com</a>
            </p>
            <div className="socail_links">
              <ul>
                <li>
                  <a href="!#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-md-6 col-lg-2">
          <div className="footer_widget">
            <h3 className="footer_title">Company</h3>
            <ul className="links">
              <li>
                <a href="!#">Pricing</a>
              </li>
              <li>
                <a href="!#">About</a>
              </li>
              <li>
                <a href="!#"> Gallery</a>
              </li>
              <li>
                <a href="!#"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-lg-3">
          <div className="footer_widget">
            <h3 className="footer_title">Popular destination</h3>
            <ul className="links double_links">
              <li>
                <a href="!#">Indonesia</a>
              </li>
              <li>
                <a href="!#">America</a>
              </li>
              <li>
                <a href="!#">India</a>
              </li>
              <li>
                <a href="!#">Switzerland</a>
              </li>
              <li>
                <a href="!#">Italy</a>
              </li>
              <li>
                <a href="!#">Canada</a>
              </li>
              <li>
                <a href="!#">Franch</a>
              </li>
              <li>
                <a href="!#">England</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-lg-3">
          <div className="footer_widget">
            <h3 className="footer_title">Instagram</h3>
            <div className="instagram_feed">
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/1.png" />
                </a>
              </div>
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/2.png"  />
                </a>
              </div>
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/3.png"  />
                </a>
              </div>
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/4.png"  />
                </a>
              </div>
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/5.png"  />
                </a>
              </div>
              <div className="single_insta">
                <a href="!#">
                  <img src="../assets/img/instagram/6.png"  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copy-right_text">
    <div className="container">
      <div className="footer_border" />
      <div className="row">
        <div className="col-xl-12">
          <p className="copy_right text-center">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

        )
    }
}
export default Footer;