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


function App() {

  return (
    <Router>
      <Header></Header>
      

      <Route exact path="/" component={Home}></Route>
      <Route path="/showing-movie" component={ShowingMovie}></Route>
      <Route path="/coming-movie" component={ComingMovie}></Route>
      <Route path="/detail/:id" component={DetailFilm}></Route>
      <Route path="/customer/login" component={Login}></Route>
      <Footer></Footer>
      

      
    </Router>


  )
}

export default App;
