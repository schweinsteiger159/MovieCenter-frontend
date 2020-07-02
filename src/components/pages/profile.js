import React, { Component } from "react";
import ColorizeIcon from '@material-ui/icons/Colorize';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Redirect, Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  CssBaseline,
  Grid,
  Container,
  Chip,
  Divider,
  Button,
  Card,
  CardContent,
  Tooltip,
  Fab,
  Backdrop,
  CircularProgress
} from '@material-ui/core';

import Header from "../header";
import Footer from "../footer";
import * as AppConstant from '../contants/constants';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  chip:  {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  card: {
    minWidth: 375
  }
}));

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : null,
      account: null,
      isLoading: true
    };
    this.isLogin();
    console.log("Username ===> ", this.state.username);
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    this.retrieveDataAccount();
  }

  retrieveDataAccount = () => {
    fetch(AppConstant.domainURL + '/accounts/' + this.state.username)
    .then(res => res.json())
    .then(dataAccount => {
      console.log("Account Info ===> ", dataAccount)
      this.setState({ account: dataAccount });
      this.setState({ isLoading : false });
    })
    .catch(console.log)
  }

  isLogin() {
    var user = JSON.parse(localStorage.getItem("client"));
    if (user === null) {
      this.state.username = undefined;
    } else {
      this.state.username = user.username;
    }
  }

  adjustProfile = () => {
    return (
      <>
        <Link to="/customer/adjust-profile" />
      </>
    );
  }

  render() {
    
    if (this.state.username === null || this.state.username === undefined) {
      return (
        <Redirect to="/customer/login" />
      );
    }

    if (this.state.account !==  null) {
      return (
        <>
          <Header></Header>
  
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={useStyles.paper}>
              <Typography 
                component="h1" 
                variant="h5"
              >
                Hồ sơ
              </Typography>
              <br></br>
              <Divider />
  
              <Card className={useStyles.card}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                      <Tooltip title="Chi tiết">
                        <Fab
                          variant="round"
                          color="primary"
                          size="large"
                        >
                          <DehazeIcon />
                        </Fab>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Tooltip title="Sửa đổi thông tin" arrow>
                        <Button 
                          variant="outlined"
                          color="primary"
                          className={useStyles.button}                       
                          startIcon={<ColorizeIcon />}
                          href="/customer/adjust-profile"
                        >
                          Tùy chỉnh
                        </Button>
                      </Tooltip>              
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <Divider />
                      <br></br>
                      <div className={useStyles.chip}>
                        <Tooltip title="Tên tài khoản hay tên đăng nhập">
                          <Chip 
                            variant="outlined" 
                            color="primary"
                            label="Tên tài khoản"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Divider />
                      <br></br>
                      <div>
                        <Typography 
                          component="h6" 
                          variant="h6"                    
                        >
                          {this.state.account.userName}
                        </Typography>
                      </div>
                      <br></br>
                      <Divider />
                    </Grid>
                    
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Họ và tên">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Tên"
                          />
                        </Tooltip>
                      </div> 
                      <br></br>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {this.state.account.fullName}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Email đăng ký tài khoản">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Email"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />     
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {this.state.account.email}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Số điện thoại đăng ký tài khoản">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Số điện thoại"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />     
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {this.state.account.phoneNumber}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Giới tính">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Giới tính"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />     
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {this.state.account.gender}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Ngày tháng năm sinh">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Ngày sinh"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />     
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {(this.state.account.dayOfBirth === null) || (this.state.account.dayOfBirth === "") 
                          ? "Not Available" : this.state.account.dayOfBirth}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <div className={useStyles.chip}>
                        <Tooltip title="Điểm tích lũy">
                          <Chip 
                            variant="outlined"
                            color="primary"                
                            label="Điểm tích lũy"
                          />
                        </Tooltip>
                      </div>
                      <br></br>
                      <Divider />      
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography 
                        component="h6" 
                        variant="h6"                   
                      >
                        {this.state.account.accumulatedPoints === null ? 0 : this.state.account.accumulatedPoints}
                      </Typography>
                      <br></br>
                      <Divider />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </Container>
          <br></br>
          
       
        </>
      );
    } else {
      return (
        <div>
          <Backdrop 
            className={useStyles.backdrop} 
            open={this.state.isLoading}
            invisible={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      );
    } 
  }
}

export default Profile;
