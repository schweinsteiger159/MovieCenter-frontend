import React, { Component } from "react";

import DehazeIcon from '@material-ui/icons/Dehaze';
import SaveIcon from '@material-ui/icons/Save';
import { Redirect } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  CssBaseline,
  Grid,
  Container,
  Divider,
  Button,
  Card,
  CardContent,
  Tooltip,
  Fab,
  TextField,
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import axios from 'axios';

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

class AdjustProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : null,
      fullName: null,
      email: null,
      phoneNumber: null,
      account: null,
      isUpdate: false,
      errorMessage: null,
      isLoading: true
    };
    this.isLogin();
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    this.retrieveDataAccount();
  }

  retrieveDataAccount = () => {
    fetch(AppConstant.domainURL + '/accounts/' + this.state.username)
    .then(res => res.json())
    .then(dataAccount => {
      console.log("Account Info ===> ", dataAccount);
      this.setState({ account: dataAccount });
      this.setState({ isLoading : false });
    })
    .catch(console.log)
  }

  updateAccount(updateAccount) {
    axios({
      method: 'PUT',
      url: AppConstant.domainURL + "/accounts/updateAccount",
      data: updateAccount,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (res) {
        console.log("Account info after updated ===> ", res)
        this.setState({ isUpdate : true });
      }.bind(this))
      .catch(function (err) {
        this.setState({ errorMessage: err });
      }.bind(this));
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
    if (this.state.fullName === null) {
      this.state.fullName = this.state.account.fullName;
    }
    if (this.state.email === null) {
      this.state.email = this.state.account.email;
    }
    if (this.state.phoneNumber === null) {
      this.state.phoneNumber = this.state.account.phoneNumber;
    }
    var updateAccount = {
      "userName" : this.state.account.userName,
      "fullName" : this.state.fullName,
      "email" : this.state.email,
      "phoneNumber" : this.state.phoneNumber
    }
    console.log("Update account ===> ", updateAccount);
    this.updateAccount(updateAccount);
  }

  isLogin() {
    var user = JSON.parse(localStorage.getItem("client"));
    if (user === null) {
      this.state.username = undefined;
    } else {
      this.state.username = user.username;
    }
  }

  render () {

    if (this.state.username === null || this.state.username === undefined) {
      return (
        <Redirect to="/customer/login" />
      );
    }

    if (this.state.isUpdate) {
      return (
        <Redirect to="/customer/profile"/>
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
                Tùy chỉnh hồ sơ
              </Typography>
              <br></br>
              <Divider />
  
              <Card className={useStyles.card}>
                <CardContent>
                  <form onSubmit={this.handleSubmit}>
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
                        <Tooltip title="Lưu những sửa đổi" arrow>
                          <Button 
                            variant="outlined"
                            color="primary"
                            className={useStyles.button}                       
                            startIcon={<SaveIcon />}
                            type="submit"
                          >
                            Lưu
                          </Button>
                        </Tooltip>              
                      </Grid>
    
                      <Grid item xs={12} sm={4}>
                        <Divider />
                        <br></br>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Tên tài khoản"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Divider />
                        <br></br>
                        <TextField
                          fullWidth
                          disabled
                          variant="outlined"
                          defaultValue={this.state.account.userName}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Tên"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          required
                          label=" "
                          variant="outlined"
                          name="fullName"
                          defaultValue={this.state.account.fullName}
                          onChange={this.handleChange}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
    
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Email"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          required
                          label=" "
                          variant="outlined"
                          name="email"
                          defaultValue={this.state.account.email}
                          onChange={this.handleChange}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
    
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Số điện thoại"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          required
                          label=" "
                          variant="outlined"
                          name="phoneNumber"
                          defaultValue={this.state.account.phoneNumber}
                          onChange={this.handleChange}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
    
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Giới tính"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          disabled
                          variant="outlined"
                          defaultValue={this.state.account.gender}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="filled"
                          color="primary"
                          defaultValue="Ngày sinh"
                          InputProps={{
                            readOnly: true,
                          }}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          disabled
                          variant="outlined"
                          defaultValue={this.state.account.dayOfBirth}
                        >
                        </TextField>
                        <br></br>
                        <Divider />
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Container>
          <br></br>
          
          <Footer></Footer>
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

export default AdjustProfile;
