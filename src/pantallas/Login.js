
import './Admin.css';

import Moment from 'moment';
import React,{useEffect,useState} from 'react';
import { TextField,Card,CardContent,CardActions,Button,AppBar,Toolbar,ButtonGroup,Text } from '@material-ui/core';


const Login = ()=> {

    const[usuarioSeleccionado,setUsuarioSeleccionado]=useState({
        usuario:'',
        contraseña:''
      })

    const handleChange=e=>{
        const{name,value}=e.target;
        setUsuarioSeleccionado({...usuarioSeleccionado,[name]:value})
        console.log(usuarioSeleccionado)
    
      }
    
    const iniciarSesion=()=>{
            (usuarioSeleccionado.usuario==="admin" && usuarioSeleccionado.contraseña==="admin")?
            window.location.href="/calendario" : window.alert("Usuario y/o contraseña incorrectas");
    }
    return(
        <div align="center" className="admin">
            <br></br>
            <br></br>
            <br></br>
            <Card>
                <form action={()=>iniciarSesion()}>
                <label>Usuario</label>
                <br></br>

                <input type="text" name="usuario" autoComplete="on" onChange={handleChange}></input>
                <br></br>
                <label>Contraseña</label>
                <br></br>
                <input type="password" name="contraseña" autoComplete="on"onChange={handleChange}></input>
                <br></br>
                <br></br>
                <br></br>
                <Button onClick={()=>iniciarSesion()} color="secondary">Ingresar</Button>
                </form>
            </Card>



        </div>



    );
}

export default Login;

