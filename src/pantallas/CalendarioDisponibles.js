

import './Admin.css';

import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import {Dialog,Card,CardContent,DialogContent,DialogActions ,DialogContentText,Button} from '@material-ui/core';
import axios from 'axios';
import Calendar from 'danger-calendar';
import 'danger-calendar/dist/index.css';

const CalendarioDisponibles = ()=> {
    
    const [data,setData] = useState([]);
    const [eventoSeleccionado,setEventoSeleccionado] = useState([
          {fecha:'',
        datos:''}

    ]);

    const consultarTurnos=(turno)=>{
  
      const urlWsp = `https://api.whatsapp.com/send?phone=543517894048&text=¿El turno del ${convertirFecha(turno.fecha)} a las ${turno.hora} hs sigue disponible?`;
      window.location.href=urlWsp;
    }
    const convertirFecha=(fechaTurno)=>{
  
      return Moment(fechaTurno).format('DD/MM/YYYY');
    
    }

    const[intervaloSeleccionado,setIntervaloSeleccionado] = useState({
      fechaDesde : Moment(Date.now()).format("YYYY-MM-DD"),
      fechaHasta: Moment(Date.now()).add(60,'days').format('YYYY-MM-DD')
  }
  );


    const url = "https://sysgestion.somee.com/api/turnos";

    const peticionesGet= async ()=>{
        await axios.get(url)
        .then(response=>{
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      var events = data.map( item => ((item.cliente === '')||(item.cliente===null)) ? (
        { date: item.fecha , title : item.cliente +" "+item.hora , color:'red'})  : {date:'01-01-2000'}

      )

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
       

        setOpen(false);
      };
      
      const abrir = (value)=>{
        const nuevoEvento = (value.currentTarget.firstElementChild.innerText !== '') ? {fecha: value.date , datos:value.currentTarget.firstElementChild.innerText}:{fecha:'',datos:''}; 
        console.log(value.currentTarget.firstElementChild.innerText);
        
        console.log(value);

        console.log(eventoSeleccionado.fecha);
        setEventoSeleccionado(nuevoEvento);
        setOpen(true);
      }
       

      useEffect(()=>
      peticionesGet(),[])

    return(

        <div>
<br></br>
<br></br>
<br></br>
     

        <Calendar
      onClick={(value) => abrir(value)}
      onDoubleClick={(value)=>abrir(value)}
      events={events}
      iso={true}
    />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {(eventoSeleccionado.fecha!==undefined && eventoSeleccionado.datos!=='')?(
            <div>
            {data.map(turno=> ( turno.fecha === (eventoSeleccionado.fecha+"T00:00:00") && turno.cliente==="") ? (
                <Card variant="outlined">
                                  {console.log(turno.fecha)}

                <CardContent>
                  <h1>{Moment(turno.fecha).format('DD/MM/YYYY')}</h1>
                  <h1>{turno.hora}</h1>
                  <Button startIcon={<img src="https://cdn.icon-icons.com/icons2/729/PNG/128/whatsapp_icon-icons.com_62756.png" width="40"/>} onClick={()=>consultarTurnos(turno)} variant="contained" color="secondary">Solicitar</Button>
                  </CardContent>

                  </Card>

            ):console.log(""))}
            
          
          
           </div>
          ): (<div><label>No existe ningun evento en la fecha seleccionada</label></div>)
          }

          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>

      </Dialog>

        </div>



    );
}

export default CalendarioDisponibles;

