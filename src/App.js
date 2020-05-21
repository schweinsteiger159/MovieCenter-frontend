import React from 'react';
import './App.css';
import RouterURL from './components/Router/routerURL';
import Header from './components/header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import ShowingMovie from './components/pages/showing-movie';
import ComingMovie from './components/pages/coming-movie';
import Detail from './components/pages/detail'
import AdminFilm from './components/pages/AdminFilm';
import BookTicket from './components/pages/book-ticket';
import Footer from './components/footer';
import Login from './components/pages/login';

function App() {

  return (
    <Router>
      <Header></Header>
      
      <Route exact path="/" component={Home}></Route>
      <Route path="/showing-movie" component={ShowingMovie}></Route>
      <Route path="/coming-movie" component={ComingMovie}></Route>

      <Route path="/detail/:id" component={Detail}></Route>
      <Route path="/book-ticket" component={BookTicket}></Route>
      <Route path="/customer/login" component={Login}></Route>

      <Route path="/admin/film" component={AdminFilm}></Route>
      
      
      <Footer></Footer>

      
    </Router>


  );
}

export default App;
