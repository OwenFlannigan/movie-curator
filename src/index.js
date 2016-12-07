import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';
import Watchlist from './Watchlist';
import Home from'./Home';
import AdvancedSearch from './AdvancedSearch';
import Movies from './Movies';
import Landing from './Landing';
import Start from './Start';
import RecommendedMoviePage from './RecommendedMoviesPage';
import firebase from 'firebase';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './index.css';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyBeR0rvkB8aPUDIOBoxxDOlb2joYapzSA0",
  authDomain: "movie-curator.firebaseapp.com",
  databaseURL: "https://movie-curator.firebaseio.com",
  storageBucket: "movie-curator.appspot.com",
  messagingSenderId: "462576352543"
};
firebase.initializeApp(config);

//localhost/search/titanic
//localhost/search?q=titanic

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="start" component={Start}>
      <IndexRoute component={Landing} />    
      <Route path="/join" component={SignUpForm} />
      <Route path="/login" component={SignInForm} />
    </Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="recommended" component={RecommendedMoviePage} />
      <Route path="watchlist" component={Watchlist} />
      <Route path="search" component={AdvancedSearch} />
      <Route path="/movie/:movieId" component={Movies} />
    </Route>
    
  </Router>,
  document.getElementById('root')
);


