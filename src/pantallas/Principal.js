

import './Admin.css';
import './carousel.css';
import './carousel.min.css';
import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import { TextField,Card,CardContent,CardActions,Button,AppBar,Toolbar,ButtonGroup,Text } from '@material-ui/core';
import axios from 'axios';
import CalendarioDisponibles from './CalendarioDisponibles';

import imagen1 from './imagenes/principal1.jpg';
import imagen2 from './imagenes/principal2.jpg';
import imagen3 from './imagenes/principal3.jpg';

const Principal = ()=> {
    const [fecha,setFecha] = useState(Date);
    const [data,setData] = useState([]);
    const [sortedData,setSortedData] = useState([]);

 
    
  
    const url = "https://esencia.somee.com/api/turnos";


   
  const consultarInstagram=()=>{
  
    const url = "https://www.instagram.com/esencia.cba/?hl=es-la"

    window.location.href=url;
  }
  
  const consultarFacebook=()=>{
  
    const url = "https://www.facebook.com/beautyesencia.cba/"

    window.location.href=url;
  }
  const consultarWhatsapp=()=>{
  
    const url = "https://api.whatsapp.com/send?phone=5493512802515"

    window.location.href=url;
  }




  
    Moment.locale("en");
  return (

        <div className="App">
 
            <Carousel showArrows={true}>
                <div align="center">
                    <img src={imagen1} />
                </div>
                <div>
                    <img src={imagen2} />
                </div>
                <div>
                    <img src={imagen3} />
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
            <Button onClick={()=>consultarInstagram()} startIcon={<img src="https://ouch-cdn2.icons8.com/TXxYMqtDxKs7IvFU7WvxmjX4JMBSRd9GPGQERBsc6yg/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOS8x/NDU2ZmY1NC02NmE3/LTQ1MzYtOGEwZS03/OTA3NmE1ODRjZTMu/c3Zn.png" width="40"/>} ></Button>
            <Button onClick={()=>consultarFacebook()} startIcon={<img src="https://cdn.icon-icons.com/icons2/99/PNG/128/facebook_socialnetwork_17442.png" width="40"/>} ></Button>
</ButtonGroup>
            </Card>

            </div>

    );
}



export default Principal;