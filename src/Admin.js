
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import { Card,Button,AppBar,Toolbar,TextField,Text } from '@material-ui/core';
import axios from 'axios';
import {Modal,ModalFooter,ModalHeader,ModalBody} from 'reactstrap';

const Admin = ()=> {
    const[data,setData] =useState([]);
    const[modalInsertar,setModalInsertar]=useState(false);
    const[modalEditar,setModalEditar]=useState(false);
    const url = "https://sysgestion.somee.com/api/turnos";

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
          abrirCerrarModalInsertar();

        })
      }
    
      const seleccionarTurno=(turno,caso)=>{
        setTurnoSeleccionado(turno);
        (caso==="Editar")&&abrirCerrarModalEditar()
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
    
    <Button color="primary" variant="contained" onClick={()=>abrirCerrarModalInsertar()}>Insertar turno</Button>


  <table className='table table-bordered'>
    <thead>
  <tr>
  <th>Fecha</th>
  <th>Hora</th>
  <th>Cliente</th>
  <th>Acciones</th>
  
  
  </tr>
  </thead>
    <tbody>
      {data.map(turno=>(
        <tr>
          <td>{turno.fecha}</td>
          <td>{turno.hora}</td>
          <td>{turno.cliente}</td>
          <td>
            <Button color="primary" variant="contained" onClick={()=>seleccionarTurno(turno,"Editar")}>Editar</Button>
            <button className="btn btn-danger">Eliminar</button>
  
  
          </td>
  
  
        </tr>
      ))}
    </tbody>
  </table>

  
<Modal isOpen={modalInsertar}>
    
  <ModalHeader>Insertar turno</ModalHeader>
  <ModalBody>
    <div className="form-group">
        <br></br>
      <TextField id="fecha" name="fecha" label="fecha" type="date" onChange={handleChange} />
      <br></br>

      <TextField id="hora" name="hora" label="hora" type="time" onChange={handleChange}  />
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