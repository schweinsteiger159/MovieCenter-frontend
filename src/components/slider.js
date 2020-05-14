import React from 'react';
const Slider = () => {
    return (
        <div className="slider sliderv2">
        <div className="container">
          <div className="row">
            <div className="slider-single-item">
              <div className="movie-item">
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="title-in">
                      <div className="cate">
                        <span className="blue"><a href="#">Sci-fi</a></span>
                        <span className="yell"><a href="#">Action</a></span>
                        <span className="orange"><a href="#">advanture</a></span>
                      </div>
                      <h1><a href="#">guardians of the<br />
                          galaxy <span>2015</span></a></h1>
                      <div className="social-btn">
                        <a href="#" className="parent-btn"><i className="ion-play" /> Watch Trailer</a>
                        <a href="#" className="parent-btn"><i className="ion-heart" /> Add to Favorite</a>
                        <div className="hover-bnt">
                          <a href="#" className="parent-btn"><i className="ion-android-share-alt" />share</a>
                          <div className="hvr-item">
                            <a href="#" className="hvr-grow"><i className="ion-social-facebook" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-twitter" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-googleplus" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-youtube" /></a>
                          </div>
                        </div>		
                      </div>
                      <div className="mv-details">
                        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
                        <ul className="mv-infor">
                          <li>  Run Time: 2h21’ </li>
                          <li>  Rated: PG-13</li>
                          <li>  Release: 1 May 2015</li>
                        </ul>
                      </div>
                      <div className="btn-transform transform-vertical">
                        <div><a href="#" className="item item-1 redbtn">more detail</a></div>
                        <div><a href="#" className="item item-2 redbtn hvrbtn">more detail</a></div>
                      </div>		
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="mv-img-2">
                      <a href="#"><img src="../assets/images/uploads/poster1.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>	
              </div>
              <div className="movie-item">
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="title-in">
                      <div className="cate">
                        <span className="blue"><a href="#">Sci-fi</a></span>
                        <span className="yell"><a href="#">Action</a></span>
                        <span className="orange"><a href="#">advanture</a></span>
                      </div>
                      <h1><a href="#">guardians of the<br />
                          galaxy <span>2015</span></a></h1>
                      <div className="social-btn">
                        <a href="#" className="parent-btn"><i className="ion-play" /> Watch Trailer</a>
                        <a href="#" className="parent-btn"><i className="ion-heart" /> Add to Favorite</a>
                        <div className="hover-bnt">
                          <a href="#" className="parent-btn"><i className="ion-android-share-alt" />share</a>
                          <div className="hvr-item">
                            <a href="#" className="hvr-grow"><i className="ion-social-facebook" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-twitter" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-googleplus" /></a>
                            <a href="#" className="hvr-grow"><i className="ion-social-youtube" /></a>
                          </div>
                        </div>		
                      </div>
                      <div className="mv-details">
                        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
                        <ul className="mv-infor">
                          <li>  Run Time: 2h21’ </li>
                          <li>  Rated: PG-13</li>
                          <li>  Release: 1 May 2015</li>
                        </ul>
                      </div>
                      <div className="btn-transform transform-vertical">
                        <div><a href="#" className="item item-1 redbtn">more detail</a></div>
                        <div><a href="#" className="item item-2 redbtn hvrbtn">more detail</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="mv-img-2">
                      <a href="#"><img src="../assets/images/uploads/poster1.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Slider