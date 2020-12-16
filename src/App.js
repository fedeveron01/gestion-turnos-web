import logo from './logo.svg';
import './App.css';
import './carousel.css';
import './carousel.min.css';
import Admin from './pantallas/Admin.js';
import Principal from './Principal';
import Login from './pantallas/Login'
import Calendario from './pantallas/Calendario';

import { AppBar,Toolbar,Button} from '@material-ui/core';
import React from 'react';

import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

function App() {

  return (

    <div>
          <Router>

        <AppBar color="secondary"><Toolbar position="static" color="red"> 
    <Button color="inherit" to="/" component={Link} > Inicio
</Button>
      </Toolbar></AppBar>


 
      <Route> <Switch>
          <Route path="/admin/yy4jFpDix8xO6CPwhxDEOyz$hIii7HwpmDfp69Iz8sdzQO4CyD02yAAOVjaoeG29ycv8wcOAfJl8lbtNJvVhYgo9wu">
  
            <Admin />
          </Route>
  
          <Route path="/admin">
  
           <Login />
        </Route>

  
      <Route path="/calendario">
  
       <Calendario />
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
