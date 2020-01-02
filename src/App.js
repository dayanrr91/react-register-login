import React from 'react';
import logo from './logo.svg';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <HashRouter>
        <div>
            <div className="">
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
            </div>
        </div>

    </HashRouter>   
  );
}

export default App;
