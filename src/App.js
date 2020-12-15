import logo from './logo.svg';
import './App.css';
import './carousel.css';
import './carousel.min.css';
import Admin from './Admin.js';
import Principal from './Principal';

import React from 'react';

import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

function App() {

  return (

    <div>
    <Router>

 
      <Route> <Switch>
          <Route path="/admin">
  
            <Admin />
          </Route>
  
          <Route path="/">
          <Principal />

          </Route>
        </Switch>
        
        
        </Route>
        </Router>

</div>
  );
}

export default App;
