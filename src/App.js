import './App.css';

import Admin from './pantallas/Admin.js';
import Principal from './pantallas/Principal';
import Login from './pantallas/Login';
import Facebook from './pantallas/Facebook';
import Ayuda from './pantallas/Ayuda';
import Galeria from './pantallas/Galeria';

import Inicio from './pantallas/Inicio';

import Calendario from './pantallas/Calendario';



import { BottomNavigation,BottomNavigationAction,AppBar,Toolbar,makeStyles,Tab,Tabs} from '@material-ui/core';
import React,{useState} from 'react';

import SwipeableViews from 'react-swipeable-views';
import {BrowserRouter as Router, Route,Switch,Redirect,Link} from 'react-router-dom';

function App() {
  const [value,setValue] = useState(0);
  var c = 0;
  const abrirAdmin =()=>{
    c+=1;
    (c)===4?window.location.href="./admin/":console.log("")
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
  const handleChange = (event, value) => {
    setIndex(value);
  };

  const handleChangeIndex = index => {
    setIndex(index)
  };

  const classes = useStyles();
  const [index,setIndex] = useState(0);

  return (


    <div align="center" className="App">
          <Router>
          <Route> 
          <AppBar color="secondary" mainClass={classes}>
            <Toolbar position="static" color="red"> 
 

            <div>
        <Tabs value={index} onChange={handleChange} centered>
        

        <Tab to="/" component={Link} icon={<img width="40" src="https://i.pinimg.com/originals/88/48/d5/8848d51a04d7f272187ec179f7def64a.png"/>}>   </Tab>
          <Tab icon={<img width="40" src="https://cdn4.iconfinder.com/data/icons/erp-software-icon-set-1/512/new_order_confirmation_green-512.png"/>} />
         <Tab icon={<img width="40" src="https://cdn.iconscout.com/icon/free/png-256/facebook-social-media-fb-logo-square-44659.png"/>} />
         <Tab onClick={()=>abrirAdmin()} icon={<img width="35" src="https://image.flaticon.com/icons/png/128/61/61040.png?ga=GA1.2.816560065.1596499200"/>} />

        </Tabs>
     
      </div>
      
    
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

   
  
      <Route path="/calendario">
  
       <Calendario />
      </Route>


      <Route path="/">

      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <div><Principal></Principal></div>
        <div><Galeria></Galeria></div>
        <div><Facebook></Facebook></div>
        <div><Ayuda></Ayuda></div>

      </SwipeableViews>    
      
      
         </Route>
    



        </Switch>
        
        
        </Route>
        </Router>
        
</div>
  );

  
}

const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

export default App;
