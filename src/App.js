import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/pages/home'
import ShowingMovie from './components/pages/showing-movie';
import ComingMovie from './components/pages/coming-movie';
import DetailFilm from './components/pages/detail-film';
import Login from './components/pages/login';
import Cinema from './components/pages/cinema';
import SelectSeat from './components/pages/select-seat';
import Blog from './components/pages/blog';
import BlogDetail from './components/pages/detail-blog';
import SignUp from './components/pages/sign-up';
import CheckOut from './components/pages/checkout';

function App() {

  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/showing-movie" component={ShowingMovie}></Route>
      <Route path="/coming-movie" component={ComingMovie}></Route>
      <Route path="/detail/:id" component={DetailFilm}></Route>
      <Route path="/cinema" component={Cinema}></Route>
      <Route path="/select-seat" component={SelectSeat}></Route>
      <Route path="/customer/login" component={Login}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/checkout" component={CheckOut}></Route>
      <Route exact path="/blog-detail" component={BlogDetail}></Route>
      <Route path='/customer/registration' component={SignUp}></Route>

      
    </Router>


  )
}

export default App;