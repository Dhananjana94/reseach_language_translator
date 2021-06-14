import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/translator.css';


import Sign from './Sign';
import Voice from './Voice';
import Model from './Model';
import Home from './Home'


function App() {


  return (
      <div className="App">
        <div className="container">
          <nav class="nav">
            <a class="nav-link" href="/React_sign_language_detector">Home</a>
            <a class="nav-link" href="/React_sign_language_detector/sign">Sign to text</a>
            <a class="nav-link" href="/React_sign_language_detector/voice">Voice to text</a>
            <a class="nav-link" href="/React_sign_language_detector/model">Text to sign</a>
          </nav>
        </div>
        <Router>
            <Switch>
              <Route exact path="/React_sign_language_detector">
                <Home/>
              </Route>
              <Route exact path="/React_sign_language_detector/sign">
                <Sign/>
              </Route>
              <Route exact path="/React_sign_language_detector/voice">
                <Voice/>
              </Route>
              <Route exact path="/React_sign_language_detector/model">
                <Model/>
              </Route>
            </Switch>
        </Router>
        
      </div>
  );
}


export default App;
