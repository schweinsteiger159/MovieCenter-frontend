import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../header';
import Footer from '../footer';
import * as AppConstant from '../contants/constants';
import { Redirect } from 'react-router-dom';

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      errorMessage: '',
      isSent : false,
      isLoading : false,
      isLogin: false
    }
    this.isLogin();
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading : true });
    this.sendOtp();
  }

  sendOtp() {
    axios({
      method: 'POST',
      url: AppConstant.domainURL + "/otp/sendOTP/" + this.state.username,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (res) {
        console.log("Send OTP response ===> ", res)
        this.setState({ isSent : true });
        this.setState({ isLoading : false });
      }.bind(this))
      .catch(function (err) {
        this.setState({ errorMessage: err });
      }.bind(this));
  }

  isLogin = () => {
    var user = JSON.parse(localStorage.getItem("client"));
    if (user === null) {
      this.state.isLogin = false;
    } else {
        this.state.isLogin = true;
    }
  }

  render() {

    if (this.state.isLogin) {
      return (
        <Redirect to="/"/>
      );
    }

    if (this.state.isLoading) {
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

    if (this.state.isSent) {
      return (
        <Redirect to={{
            pathname: '/changePassword',
            state: { username : this.state.username }
          }}
        />
      )
    }
    
    return(
      <>
        <Header />

        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={useStyles.paper}>
            <Typography 
              component="h1" 
              variant="h5"
            >
              Vui lòng nhập tên đăng nhập của bạn
            </Typography>
            <br></br>
            <div>
              <h6>
                <i>Tên đăng nhập dùng để dịnh danh và gửi mã OTP thông qua email đăng ký tài khoản</i>
              </h6>
            </div>
            <br></br>
            <form className={useStyles.form} onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    required fullWidth 
                    name="username" id="username"
                    label="Tên đăng nhập" 
                    type="text"
                    variant="outlined" size="medium" 
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <br></br>
              <Grid item xs={2}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  className={useStyles.submit}
                >
                  Xác nhận
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
        <br></br>

      
      </>
    );
  }
}

export default ForgotPassword;