import React from 'react';

const ContentFilm = (props) => {
    var name = props.film.namefilm;
    var types = props.film.type;

    console.log("----------RENDER-----------");
    console.log(types);
    
    const renderType = types => {
        if (types) {
            return types.map((type, key) => {
               return <a href="#" key = {key}>{type.nameType},</a>
            })
        }
    }

    const buyTicket = (status) =>{
      var user = JSON.parse(localStorage.getItem("client"));
      var check = "";
      
      if(status == "SHOWING"){
        if(user != null) {
          return (
            <div className="movie-btn">
                <div className="btn-transform transform-vertical">
                  <div>
                    <a href="/book-ticket" className="item item-1 yellowbtn">
                      {" "}
                      <i className="ion-card" /> Buy ticket
                    </a>
                  </div>
                  <div>
                    <a href="/book-ticket" className="item item-2 yellowbtn">
                      <i className="ion-card" />
                    </a>
                  </div>
                  
                </div>
                
              </div>
          )
        }else{
          return (
            <div className="movie-btn">
              <p>Đăng nhập để đặt vé</p>    
            </div>
          )
        }
      }
    }

    function iframe(trailer){
      return {
        __html : trailer
      }
    }

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
          <div className="movie-img">
            <img src={"../assets/images/film/" +props.film.image} alt />
            {buyTicket(props.film.status)}
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
                          <div dangerouslySetInnerHTML={ iframe(props.film.trailer) } />

                          
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