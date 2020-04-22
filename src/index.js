import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbarmenu from './components/navbar-menu';
import Formlogin from './components/form-login';
import FormRegister from './components/form-register';
import SliderMenu from './components/slider-menu';

console.log("hello");
ReactDOM.render(
    <Navbarmenu />,
  document.getElementById('header-navbar-menu')
);

ReactDOM.render(
  <Formlogin />,
  document.getElementById("login-content")
);

ReactDOM.render(
  <FormRegister />,
  document.getElementById("signup-content")
)

ReactDOM.render(
  <SliderMenu />,
  document.getElementById("slider-menu")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
