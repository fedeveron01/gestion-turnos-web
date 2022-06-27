
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import { Paper,Table,Button,TableContainer,TableHead,TableRow,TableCell,TableBody,Toolbar,TextField,Text } from '@material-ui/core';
import axios from 'axios';
import {Modal,ModalFooter,ModalHeader,ModalBody} from 'reactstrap';
const Admin = ()=> {
    const[data,setData] =useState([]);
    const[modalInsertar,setModalInsertar]=useState(false);
    const[modalEditar,setModalEditar]=useState(false);
    const url = "https://esencia.somee.com/api/turnos";

    const[turnoSeleccionado,setTurnoSeleccionado]=useState({
      id:'',
      fecha:'',
      hora:'',
      cliente:''
    })
  
    const handleChange=e=>{
      const{name,value}=e.target;
      setTurnoSeleccionado({...turnoSeleccionado,[name]:value})
      console.log(turnoSeleccionado)
  
    }
  
    const abrirCalendario =()=>{
      window.location.href="/calendario"
    }
    const abrirCerrarModalInsertar=()=>{
      setModalInsertar(!modalInsertar);
    }
    const abrirCerrarModalEditar=()=>{
      setModalEditar(!modalEditar);
    }  
  
    const peticionesPost= async ()=>{
        delete turnoSeleccionado.id;
        turnoSeleccionado.fecha += "T00:00:00";
    
        await axios.post(url,turnoSeleccionado)
        .then(response=>{
          setData(data.concat(response.data));
          abrirCerrarModalInsertar();
        }).catch(error=>{
          console.log(error);
          window.location.reload();

          abrirCerrarModalInsertar();

        })
      }

      const peticionesDelete= async ()=>{
    
        await axios.delete(url+"/"+turnoSeleccionado.id)
        .then(response=>{
          setData(data.filter(turno=>turno.id!==response.data));
        }).catch(error=>{
          console.log(error);

        })
      }
    
    
      const seleccionarTurno=(turno,caso)=>{
        setTurnoSeleccionado(turno);
        (caso==="Editar")?abrirCerrarModalEditar():peticionesDelete()
      }
      const peticionesPut= async ()=>{
  
        await axios.put(url+"/"+turnoSeleccionado.id,turnoSeleccionado)
        .then(response=>{
          var respuesta=response.data;
          var dataAuxiliar = data;
          dataAuxiliar.map(turno=>{
            if(turno.id===turnoSeleccionado.id){
              turno.fecha=respuesta.fecha;
              turno.hora=respuesta.hora;
              turno.cliente=respuesta.cliente;
    
            }
        })
        abrirCerrarModalEditar();
        }).catch(error=>{
          console.log(error);
        })
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

  return (

 <div className="Admin">
    <br></br>
    <br></br>
    <br></br>

    <Button color="primary" variant="contained" onClick={()=>abrirCerrarModalInsertar()}>Insertar turno</Button>
    <br></br>
    <Button color="secondary" variant="contained" onClick={()=>abrirCalendario()}>Abrir calendario</Button>

    <TableContainer component={Paper}>
      <Table className="Admin" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Hora</TableCell>
            <TableCell align="right">Cliente</TableCell>
            <TableCell align="right">Acciones</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((turno) => (
            <TableRow key={turno.id}>
              <TableCell component="th" scope="row">
                {turno.id}
              </TableCell>
              <TableCell align="right">{turno.fecha}</TableCell>
              <TableCell align="right">{turno.hora}</TableCell>
              <TableCell align="right">{turno.cliente}</TableCell>
              <TableCell><Button color="primary" variant="contained" onClick={()=>seleccionarTurno(turno,"Editar")}>Editar</Button>
            <button className="btn btn-danger" onClick={()=>seleccionarTurno(turno,"Eliminar")}>Eliminar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



  
<Modal isOpen={modalInsertar}>
    <br></br>
    <br></br>
    <br></br>
  <ModalHeader>Insertar turno</ModalHeader>
  <ModalBody>
    <div className="form-group">
        <br></br>
        <label>Fecha:</label>
      <br></br>
      <TextField id="fecha" name="fecha" type="date" onChange={handleChange} />
      <br></br>
      <label>Hora:</label>
      <br></br>

      <TextField id="hora" name="hora" type="time" onChange={handleChange}  />
      <br></br>

      <label>Cliente : </label>
      <input type="text" className="form-control" name="cliente" onChange={handleChange}></input>

    </div>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary" onClick={()=>peticionesPost()}>Registrar</button>
    <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>

  </ModalFooter>
</Modal>


<Modal isOpen={modalEditar} >
<br></br><br></br><br></br>
  <ModalHeader>Modificar producto</ModalHeader>
  <ModalBody>
    <div className="form-group">
    <label>Id : </label>
      <br></br>
      <input type="text" className="form-control"  value={turnoSeleccionado && turnoSeleccionado.id} onChange={handleChange} readOnly></input>
      <br></br>
      <label>Fecha : </label>
      <br></br>
      <input type="text" className="form-control" name="fecha" value={turnoSeleccionado && turnoSeleccionado.fecha} onChange={handleChange}></input>
      <br></br>
      <label>Hora : </label>
      <input type="text" className="form-control" name="hora" value={turnoSeleccionado && turnoSeleccionado.hora}  onChange={handleChange}></input>
      <label>Cliente : </label>
      <input type="text" className="form-control" name="cliente" value={turnoSeleccionado && turnoSeleccionado.cliente}  onChange={handleChange}></input>

    </div>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary" onClick={()=>peticionesPut()}>Guardar</button>
    <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>

  </ModalFooter>
</Modal>




      </div>
    
    );
}



export default Admin;