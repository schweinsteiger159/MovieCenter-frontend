import React from 'react';

const ContentFilm = (props) => {
    var name = props.film.namefilm;
    var types = props.film.type;

    console.log("----------RENDER-----------");
    console.log(types);
    
    const renderType = types => {
        if (types) {
            return types.map(type => {
               return <a href="#">{type.nameType},</a>
            })
        }
    }
    // var type = ``;
    // for(var i in types){
    //     type += `<a href="#">${types[i].nameType}</a>, `;
    // }
    return (
        <>
          <div>
 
  
  
  
  <div className="hero mv-single-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> */}
        </div>
      </div>
    </div>
  </div>
  <div className="page-single movie-single movie_single">
    <div className="container">
      <div className="row ipad-width2">
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="movie-img sticky-sb">
            <img src={"../assets/images/film/" +props.film.image} alt />
            <div className="movie-btn">
              
              <div className="btn-transform transform-vertical">
                <div>
                  <a href="#" className="item item-1 yellowbtn">
                    {" "}
                    <i className="ion-card" /> Buy ticket
                  </a>
                </div>
                <div>
                  <a href="#" className="item item-2 yellowbtn">
                    <i className="ion-card" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className="movie-single-ct main-content">
            <h1 className="bd-hd">
              {name}
            </h1>
            
            
            <div className="movie-tabs">
              <div className="tabs">
                <ul className="tab-links tabs-mv">
                  <li className="active">
                    <a href="#overview">Tổng quát</a>
                  </li>
            
                  <li>
                    <a href="#media"> Trailer</a>
                  </li>
                 
                </ul>
                <div className="tab-content">
                  <div id="overview" className="tab active">
                    <div className="row">

                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <p>
                          {props.film.description}
                        </p>
                        
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="sb-it">
                          <h6>Đạo diễn: </h6>
                          <p style={{ color: "#4280bf" }}>
                          {props.film.director}
                          </p>
                        </div>
                        
                        <div className="sb-it">
                          <h6>Diễn viên: </h6>
                          <p style={{ color: "#4280bf" }}>
                          {props.film.actor}
                          </p>
                        </div>
                        <div className="sb-it">
                          <h6>Thể loại:</h6>
                          <p>
                            {renderType(types)}
                        
                          </p>
                        </div>
                        <div className="sb-it">
                          <h6>Ngày chiếu:</h6>
                          <p>{props.film.dateShow}</p>
                        </div>
                        
                        
                        
                        
                      </div>
                    </div>
                  </div>
                  
                  
                  <div id="media" className="tab">
                    <div className="row">
                      <div className="rv-hd">
                        <div>
                          <h3>Videos &amp; Photos of</h3>
                          <h2>Skyfall: Quantum of Spectre</h2>
                        </div>
                      </div>
                      <div className="title-hd-sm">
                        <h4>
                          Videos <span>(8)</span>
                        </h4>
                      </div>
                      <div className="mvsingle-item media-item">
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item1.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Trailer: Watch New Scenes</a>
                            </h6>
                            <p className="time"> 1: 31</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item2.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Featurette: “Avengers Re-Assembled</a>
                            </h6>
                            <p className="time"> 1: 03</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item3.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Interview: Robert Downey Jr</a>
                            </h6>
                            <p className="time"> 3:27</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item4.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Interview: Scarlett Johansson</a>
                            </h6>
                            <p className="time"> 3:27</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item1.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">
                                Featurette: Meet Quicksilver &amp; The Scarlet
                                Witch
                              </a>
                            </h6>
                            <p className="time"> 1: 31</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item2.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Interview: Director Joss Whedon</a>
                            </h6>
                            <p className="time"> 1: 03</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item3.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Interview: Mark Ruffalo</a>
                            </h6>
                            <p className="time"> 3:27</p>
                          </div>
                        </div>
                        <div className="vd-item">
                          <div className="vd-it">
                            <img
                              className="vd-img"
                              src="../assets/images/uploads/vd-item4.jpg"
                              alt
                            />
                            <a
                              className="fancybox-media hvr-grow"
                              href="https://www.youtube.com/embed/o-0hcF97wy0"
                            >
                              <img src="../assets/images/uploads/play-vd.png" alt />
                            </a>
                          </div>
                          <div className="vd-infor">
                            <h6>
                              {" "}
                              <a href="#">Official Trailer #2</a>
                            </h6>
                            <p className="time"> 3:27</p>
                          </div>
                        </div>
                      </div>
                      
                    
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}
export default ContentFilm