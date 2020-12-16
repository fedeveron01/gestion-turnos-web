
import logo from './logo.svg';
import './App.css';
import './carousel.css';
import './carousel.min.css';
import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import { TextField,Card,CardContent,CardActions,Button,AppBar,Toolbar,ButtonGroup,Text } from '@material-ui/core';
import axios from 'axios';


const Principal = ()=> {
    const [fecha,setFecha] = useState(Date);
    const [data,setData] = useState([]);
    const [sortedData,setSortedData] = useState([]);

    const[intervaloSeleccionado,setIntervaloSeleccionado] = useState({
        fechaDesde : Moment(Date.now()).format("YYYY-MM-DD"),
        fechaHasta:"2021-12-12"
    }
    );
  
  
    const url = "https://sysgestion.somee.com/api/turnos";


    const consultarTurnos=(turno)=>{
  
    const urlWsp = `https://api.whatsapp.com/send?phone=543517894048&text=¿El turno del ${convertirFecha(turno.fecha)} a las ${turno.hora} hs sigue disponible?`;
    window.location.href=urlWsp;
  }

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

  
  const handleChange=e=>{
    const{name,value}=e.target;
    setIntervaloSeleccionado({...intervaloSeleccionado,[name]:value})
    console.log(intervaloSeleccionado)

  }
  
  const ordenarData=()=>{
    const nuevoData = data.sort((a,b) => Moment(a.fecha) - Moment(b.fecha));
    setData(nuevoData);

  }


  const convertirFecha=(fechaTurno)=>{
  
    return Moment(fechaTurno).format('DD/MM/YYYY');
  
  }
 

  const peticionesGet= async ()=>{
    await axios.get(url)
    .then(response=>{
      setData(response.data);
   

    }).catch(error=>{
      console.log(error);
    })
  }
  useEffect(()=>
  peticionesGet(),[])
  
    Moment.locale("en");
  return (

        <div className="App">
 
            <Carousel showArrows={true}>
                <div align="center">
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/105585728_2673988666166255_734868968822591959_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=LwPRJEXSLrcAX8KtVT3&_nc_oc=AQk24WVpL4u2EWo6q75N_XmodOYvSDsrnTLgx-lz3narcDEgBLyYbwU2-gbg4vT5wXM&_nc_ht=scontent.fcor2-2.fna&oh=81af6bee2fa46235ebade62b265bcfc7&oe=5FFDAD83" />
                    <p className="legend">Esencia Beauty</p>
                </div>
                <div>
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/121787035_2774142272817560_6780994435773400335_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=gaxTWLDjnyIAX8ZtJqS&_nc_ht=scontent.fcor2-2.fna&oh=078202b49fa1fbce501c04b965b4a1f1&oe=5FFFE083"/>
                    <p className="legend">servicio uñas esculpidas</p>
                </div>
                <div>
                    <img src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/118762620_2733046280260493_2570999635225391527_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=R4F3ApZoWtQAX-VkcUg&_nc_ht=scontent.fcor2-1.fna&oh=895a811695f3a5f917b012ab67757993&oe=5FFF899D" />
                    <p className="legend">servicio uñas esculpidas</p>
                </div>
      
                <div>
                    <img src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/109570109_2691619324403189_3760877659480707837_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=V4kHyT2ScuIAX8ybxfa&_nc_oc=AQnICBRIPZDgY8G0tiIEl1AZ_z1nvSaylHC7PkgqUCbYh5lXDDwjLE7WL090x1mCJhI&_nc_ht=scontent.fcor2-2.fna&oh=2601a57cc23bc52dc77c98057c658f30&oe=5FFE7D7C" />
                    <p className="legend">servicio uñas esculpidas</p>
                </div>
            </Carousel>
            
            <h1>Turnos disponibles:</h1>
            <br></br>
            <h3>Filtros </h3>
            <TextField id="fechaDesde" name="fechaDesde" type="date" defaultValue={Moment(Date.now()).format('YYYY-MM-DD')} onChange={handleChange} />
            -
            <TextField id="fechaHasta" name="fechaHasta" type="date" defaultValue="2021-12-12" onChange={handleChange} />

            {()=>ordenarData()}
            {data.map(turno=> ( Moment(turno.fecha) >= Moment(intervaloSeleccionado.fechaDesde))&& (Moment(turno.fecha) <= Moment(intervaloSeleccionado.fechaHasta))  && (turno.cliente==null || turno.cliente=="" ) ? (
              <Card variant="outlined">
                <CardContent>
                  <h1>{Moment(turno.fecha).format('DD/MM/YYYY')}</h1>
                  <h1>{turno.hora}</h1>
                  <Button startIcon={<img src="https://cdn.icon-icons.com/icons2/729/PNG/128/whatsapp_icon-icons.com_62756.png" width="40"/>} onClick={()=>consultarTurnos(turno)} variant="contained" color="secondary">Solicitar</Button>
                  </CardContent>

                  </Card>

            ):null
            )
          
          }

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