

import './Admin.css';

import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import { TextField,Card,CardContent,CardActions,Button,AppBar,Toolbar,ButtonGroup,Text } from '@material-ui/core';
import axios from 'axios';
import Calendar from 'danger-calendar';
import 'danger-calendar/dist/index.css';

const Calendario = ()=> {
    
    const [data,setData] = useState([]);
    const url = "https://sysgestion.somee.com/api/turnos";

    const peticionesGet= async ()=>{
        await axios.get(url)
        .then(response=>{
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      var events = data.map( item => ((item.cliente !== '')&&(item.cliente!==null)) ? (
        { date: item.fecha , title : item.cliente +" "+item.hora , color:'red'})  : {date:'01-01-2000'}

      )

      
 
       


      useEffect(()=>
      peticionesGet(),[])

    return(

        <div>
<br></br>
<br></br>
<br></br>
<h1>Turnos reservados</h1>
     

        <Calendar
      onClick={(value) => console.log(value)}
      onDoubleClick={(value) => console.log(value)}
      events={events}
      iso={false}
    />

        </div>



    );
}

export default Calendario;

