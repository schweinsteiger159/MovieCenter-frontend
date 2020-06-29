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
import Alert from '@material-ui/lab/Alert';
import Header from '../header';
import Footer from '../footer';
import axios from 'axios';
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
}));

const genders = [
  {
    value : 'male',
    label: 'Nam'
  },
  {
    value : 'female',
    label : 'Nữ'
  }
]
  
class SignUp extends Component {
	constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      gender : '',
      dob : '',
      isCreated: false,
      isMatches: false
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

  handleConfirmPassword = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    console.log("Password: ", this.state.password);
    console.log("Confirm Password: ", this.state.confirmPassword);
    if (this.state.password === this.state.confirmPassword) {
      //this.state.isMatches = { isMatches : true };
      this.setState({ isMatches : true });
      console.log("Matches... ", this.state.isMatches);
    } else {
      //this.state.isMatches = { isMatches : false };
      this.setState({ isMatches : false });
      console.log("Not matches... ", this.state.isMatches);
    }
  }

  handleCreateAccount = (e) => {
    e.preventDefault();
    var account = {
      "userName" : this.state.userName,
      "password" : this.state.password,
      "firstName" : this.state.firstName,
      "lastName" : this.state.lastName,
      "email" : this.state.email,
      "phoneNumber" : this.state.phoneNumber,
      "gender" : this.state.gender,
      "dayOfBirth" : this.state.dob
    }
    console.log("Preparing data to create account " + account)
    this.createAccount(account);
  }

  createAccount(account) {
    axios({
      method: 'POST',
      url: AppConstant.domainURL + "/accounts/create",
      data: account,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (res) {
        console.log(res)
        this.setState({ isCreated: true })
      }.bind(this))
      .catch(function (err) {
        console.log(err);
        this.setState({ errorMessage: true })
      }.bind(this));
  }

	render() {
    window.scrollTo(0, 0)

    if (this.state.isCreated) {
      return (
        <Redirect to={{
            pathname: '/customer/login',
            state: { isCreated: true }
          }}
        />
      )
    }

		return (
			<>
				<Header></Header>
        
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={useStyles.paper}>
            <Typography component="h1" variant="h5">
              Đăng ký tài khoản
            </Typography>
            <br></br>
            <form className={useStyles.form} onSubmit={this.handleCreateAccount}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    autoComplete="fname" 
                    name="firstName" id="firstName" 
                    required fullWidth autoFocus
                    label="Tên" 
                    size="small"  variant="outlined"
                    onChange={this.handleChange} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Họ"
                    name="lastName"
                    autoComplete="lname"
                    size="small" onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Tên hiển thị"
                    name="userName"
                    autoComplete="username"
                    size="small" onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    size="small" onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Số điện thoại"
                    name="phoneNumber"
                    autoComplete="phone-number"
                    size="small" onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select required fullWidth 
                    id="gender" name="gender"
                    label="Giới tính"
                    autoComplete="gender"
                    helperText="Bạn là nam hay nữ" 
                    size="small" variant="outlined" 
                    onChange={this.handleChange}                   
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="date"
                    required fullWidth
                    label="Ngày sinh"
                    name="dob" id="dob"
                    autoComplete="dob"
                    size="small" variant="outlined"
                    onChange={this.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    required fullWidth 
                    name="password" id="password"
                    label="Mật khẩu" 
                    type="password"
                    autoComplete="current-password" 
                    variant="outlined" size="small" 
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth 
                    name="confirmPassword" id="confirmPassword" 
                    type="password" 
                    label="Xác nhận mật khẩu"
                    onChange={this.handleConfirmPassword}  
                    autoComplete="confirm-password"
                    size="small" variant="outlined" 
                    error helperText="Xác nhận mật khẩu không thành công!"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Tôi muốn nhận thông báo mới nhất về chương trình khuyễn mãi qua email"
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    className={useStyles.submit}
                  >
                    Đăng ký
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Link href="/customer/login" variant="body2">
                    Bạn đã có tài khoản? Đăng nhập
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <br></br>

		
			</>
		)
	}
}

export default SignUp;