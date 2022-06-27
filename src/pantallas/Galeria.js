import './Admin.css';
import './carousel.css';
import './carousel.min.css';
import imagen1 from './imagenes/imagen1.png';
import imagen2 from './imagenes/imagen 2.jpeg';
import imagen3 from './imagenes/imagen 3.jpeg';


import React,{useEffect,useState} from 'react';
import {Carousel} from 'react-responsive-carousel';

const Galeria = () =>{

    return(
        <div className="App">
            <br></br>
            <br></br>
            <br></br>
    
            <Carousel showArrows={true}>
                <div align="center">
                <img src={imagen1}/>
                </div>
                <div>
                <img src={imagen2} />
                </div>
                <div>
                <img src={imagen3} />
                </div>
      
            </Carousel>
            
        </div>
    );
    
    }
    
    export default Galeria;