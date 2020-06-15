import React, { Component } from 'react';
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
import Header from '../header';
import Footer from '../footer';

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
      gender : '',
      dob : ''
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

	render() {
    window.scrollTo(0, 0)
		return (
			<>
				<Header></Header>
        
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={useStyles.paper}>
            {/* <Avatar className={useStyles.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Đăng ký tài khoản
            </Typography>
            <br></br>
            <form className={useStyles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                    id="firstName" label="Tên" autoFocus size="small"
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
                    size="small"
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
                    size="small"
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
                    autoComplete="email"
                    size="small"
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
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined" select required fullWidth id="gender" label="Giới tính" autoComplete="gender"
                    helperText="Bạn là nam hay nữ" name="gender" size="small" onChange={this.handleChange}                   
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
                    variant="outlined"
                    type="date"
                    required
                    fullWidth
                    id="dob"
                    label="Ngày sinh"
                    name="dob"
                    autoComplete="dob"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Xác nhận mật khẩu"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Tôi muốn nhận thông báo mới nhất về chương trình khuyễn mãi qua email"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Button type="submit" variant="contained" color="primary" className={useStyles.submit}>
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

				<Footer></Footer>
			</>
		)
	}
}

export default SignUp;