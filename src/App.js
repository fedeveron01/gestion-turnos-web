import './App.css';

import Admin from './pantallas/Admin.js';
import Principal from './pantallas/Principal';
import Login from './pantallas/Login';
import Facebook from './pantallas/Facebook';
import Ayuda from './pantallas/Ayuda';


import Calendario from './pantallas/Calendario';



import { BottomNavigation,BottomNavigationAction,AppBar,Toolbar,makeStyles} from '@material-ui/core';
import React,{useState} from 'react';

import {BrowserRouter as Router, Route,Switch,Redirect,Link} from 'react-router-dom';

function App() {
  const [value,setValue] = useState(0);
  var c = 0;
  const abrirAdmin =()=>{
    c+=1;
    (c)===10?window.location.href="./admin/":console.log()
  }
  const useStyles = makeStyles({
    root: {
      width: 500,
      color:"red",
      position: 'center',
      float:'center',
      right : 100 ,
      backgroundColor:"#f50057",
      contentAlign:"center",
      justifyContent: "flex-end",
      vertical: 'bottom',
      horizontal: 'center'
    },
  });

  const classes = useStyles();
  
  return (


    <div align="center" className="App">
          <Router>
          <Route> 
          <AppBar color="secondary" mainClass={classes}>
            <Toolbar position="static" color="red"> 
 
            &nbsp;<BottomNavigation color="secondary" align="center"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root}
>
<BottomNavigationAction color="red" to="/" component={Link} icon={<img width="40" src="https://i.pinimg.com/originals/88/48/d5/8848d51a04d7f272187ec179f7def64a.png"/>}  />
  <BottomNavigationAction  color="red" to="/calendario" component={Link} icon={<img width="40" src="https://image.flaticon.com/icons/png/128/42/42446.png"/>}/>
  <BottomNavigationAction  to="/facebook" component={Link} icon={<img width="40" src="https://cdn.iconscout.com/icon/free/png-256/facebook-social-media-fb-logo-square-44659.png"/>}/>
  <BottomNavigationAction  onClick={()=>abrirAdmin()} to="/ayuda" component={Link} icon={<img width="35" src="https://image.flaticon.com/icons/png/128/61/61040.png?ga=GA1.2.816560065.1596499200"/>}/>

</BottomNavigation>
</Toolbar>
</AppBar>
</Route> 
      <Route> <Switch>
          <Route path="/admin/yy4jFpDix8xO6CPwhxDEOyz$hIii7HwpmDfp69Iz8sdzQO4CyD02yAAOVjaoeG29ycv8wcOAfJl8lbtNJvVhYgo9wu">
  
            <Admin />
          </Route>
  
          <Route path="/admin">
  
           <Login />
        </Route>

        <Route path="/facebook">
  
           <Facebook />
        </Route>

        <Route path="/ayuda">
  
  <Ayuda />
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
