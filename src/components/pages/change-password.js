import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import Header from '../header';
import Footer from '../footer';
import * as AppConstant from '../contants/constants';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

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
}));

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      otp: '',
      isChanged: false,
      errorMessage: '',
      hasError: false
    };
    this.hasUsername();
  };

  hasUsername = () => {
    if (this.props.location.state === undefined) {
      this.state.username = '';
    } else {
      this.state.username = this.props.location.state.username;
      console.log("Username ===> ", this.state.username);
    }
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
    var requestBody = {
      "userName" : this.state.username,
      "password" : this.state.password,
      "confirmPassword" : this.state.confirmPassword,
      "otp" : this.state.otp
    }
    this.changePassword(requestBody);
  }

  changePassword(requestBody) {
    axios({
      method: 'POST',
      url: AppConstant.domainURL + "/accounts/changePassword",
      data: requestBody,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (res) {
        console.log("Changed password response ===> ", res)
        this.setState({ isChanged: true });
      }.bind(this))
      .catch(function (err) {
        this.setState({ errorMessage: err });
        this.setState({ hasError : true })
      }.bind(this));
  }

  handleClose = (isClose) => {
    if (isClose) {
      this.setState({ isChanged : false });
    } 
  }

  showErrMsg = (stt) => {
    if (stt === true) {
      return (<p style={{ color: "red" }}>* Thay đổi mật khẩu thất bại, vui lòng kiểm tra lại thông tin</p>);
    }
  }

  showSuccessMsg = (status) => {
    if (status === true) {
      return (
        <Collapse in={this.state.isChanged}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  this.handleClose(true);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Thay đổi mật khẩu thành công! &ensp; 
            <a href="/customer/login">
              <strong>Bấm vào đây để đi tới trang đăng nhập</strong>
            </a> 
          </Alert>
        </Collapse>
      );
    }
  }

  render() {

    if (this.props.location.state === undefined) {
      return (
        <Redirect to='/customer/login' />
      )
    }

    return (
      <>
        <Header />

        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={useStyles.paper}>
            <div>
              {this.showSuccessMsg(this.state.isChanged)}
            </div>
            <h4>{this.showErrMsg(this.state.hasError)}</h4>
            <Typography component="h1" variant="h5">
              Thay đổi mật khẩu
            </Typography>
            <br></br>
            <form className={useStyles.form} onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    required fullWidth 
                    name="password" id="password"
                    label="Mật khẩu" 
                    type="password"
                    autoComplete="current-password" 
                    variant="outlined" size="medium" 
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    required fullWidth 
                    name="confirmPassword" id="confirmPassword" 
                    type="password" 
                    label="Xác nhận mật khẩu"
                    onChange={this.handleChange}  
                    autoComplete="confirm-password"
                    size="medium" variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    required fullWidth 
                    name="otp" id="otp" 
                    type="text" 
                    label="Mã OTP"
                    onChange={this.handleChange}  
                    autoComplete="otp"
                    size="medium" variant="outlined"
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

export default ChangePassword;