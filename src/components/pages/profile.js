import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import Header from "../header";
import Footer from "../footer";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "recents",
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <>
        <Header></Header>

        {/* <div 
          className="page-header header-filter" 
          data-parallax="true" 
          style="background-image: url('../assets/img/city-profile.jpg');"
        >
        </div>

        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img 
                        src="../assets/img/faces/christian.jpg" 
                        alt="Circle Image" 
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title">Hung Le</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Footer></Footer>
      </>
    );
  }
}

export default Profile;
