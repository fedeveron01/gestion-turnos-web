

import './Admin.css';

import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions ,DialogContentText,Button} from '@material-ui/core';
import axios from 'axios';
import Calendar from 'danger-calendar';
import 'danger-calendar/dist/index.css';

const Calendario = ()=> {
    
    const [data,setData] = useState([]);
    const [eventoSeleccionado,setEventoSeleccionado] = useState([
          {fecha:'',
        datos:''}

    ]);

    const url = "https://esencia.somee.com/api/turnos";

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
        
        console.log(eventoSeleccionado.datos);

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
<h1>Turnos reservados</h1>
     

        <Calendar
      onClick={(value) => abrir(value)}
      onDoubleClick={(value)=>abrir(value)}
      events={events}
      iso={false}
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
           <label> Fecha : {Moment(eventoSeleccionado.fecha).format("DD/MM/YYYY")} </label>
           <br></br>
           <label> Datos : {eventoSeleccionado.datos} </label>
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

export default Calendario;

