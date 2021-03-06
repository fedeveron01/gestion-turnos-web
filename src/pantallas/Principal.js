

import './Admin.css';
import './carousel.css';
import './carousel.min.css';
import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import { TextField,Card,CardContent,CardActions,Button,AppBar,Toolbar,ButtonGroup,Text } from '@material-ui/core';
import axios from 'axios';
import CalendarioDisponibles from './CalendarioDisponibles';

const Principal = ()=> {
    const [fecha,setFecha] = useState(Date);
    const [data,setData] = useState([]);
    const [sortedData,setSortedData] = useState([]);

 
    
  
    const url = "https://sysgestion.somee.com/api/turnos";


   
  const consultarInstagram=()=>{
  
    const url = "https://www.instagram.com/esencia.cba/?hl=es-la"

    window.location.href=url;
  }
  
  const consultarFacebook=()=>{
  
    const url = "https://www.facebook.com/beautyesencia.cba/"

    window.location.href=url;
  }
  const consultarWhatsapp=()=>{
  
    const url = "https://api.whatsapp.com/send?phone=543517894048"

    window.location.href=url;
  }




  
    Moment.locale("en");
  return (

        <div className="App">
 
            <Carousel showArrows={true}>
                <div align="center">
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/105585728_2673988666166255_734868968822591959_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=LwPRJEXSLrcAX8KtVT3&_nc_oc=AQk24WVpL4u2EWo6q75N_XmodOYvSDsrnTLgx-lz3narcDEgBLyYbwU2-gbg4vT5wXM&_nc_ht=scontent.fcor2-2.fna&oh=81af6bee2fa46235ebade62b265bcfc7&oe=5FFDAD83" />
                </div>
                <div>
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/121787035_2774142272817560_6780994435773400335_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=gaxTWLDjnyIAX8ZtJqS&_nc_ht=scontent.fcor2-2.fna&oh=078202b49fa1fbce501c04b965b4a1f1&oe=5FFFE083"/>
                </div>
                <div>
                    <img src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/118762620_2733046280260493_2570999635225391527_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=R4F3ApZoWtQAX-VkcUg&_nc_ht=scontent.fcor2-1.fna&oh=895a811695f3a5f917b012ab67757993&oe=5FFF899D" />
                </div>
      
                <div>
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/109570109_2691619324403189_3760877659480707837_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=V4kHyT2ScuIAX8ybxfa&_nc_oc=AQnICBRIPZDgY8G0tiIEl1AZ_z1nvSaylHC7PkgqUCbYh5lXDDwjLE7WL090x1mCJhI&_nc_ht=scontent.fcor2-2.fna&oh=2601a57cc23bc52dc77c98057c658f30&oe=5FFE7D7C" />
                </div>
            </Carousel>
            
            <h1>Turnos disponibles:</h1>
            <br></br>

            <CalendarioDisponibles/>
            <p style={{color:'#FF0000'}}> **Para solicitar un turno presionar en una fecha con turnos cargados</p>
            <br></br>
            <br></br>

            <Card>

              <h3>Consultar más turnos disponibles</h3>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={()=>consultarWhatsapp()} startIcon={<img src="https://cdn.icon-icons.com/icons2/729/PNG/128/whatsapp_icon-icons.com_62756.png" width="40"/>} ></Button>
            <Button onClick={()=>consultarInstagram()} startIcon={<img src="https://image.flaticon.com/icons/png/128/1383/1383263.png" width="40"/>} ></Button>
            <Button onClick={()=>consultarFacebook()} startIcon={<img src="https://cdn.icon-icons.com/icons2/99/PNG/128/facebook_socialnetwork_17442.png" width="40"/>} ></Button>
</ButtonGroup>
            </Card>

            </div>

    );
}



export default Principal;