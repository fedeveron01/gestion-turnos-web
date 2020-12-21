import Principal from './Principal';
import Facebook from './Facebook';
import Ayuda from './Ayuda';
import Galeria from './Galeria';
import SwipeableViews from 'react-swipeable-views';
import {useState} from 'react';

const Inicio = () =>{

    const handleChangeIndex = index => {
        setIndex(index)
      };
      const [index,setIndex] = useState(0);

    return(   

        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            <div ><Principal></Principal></div>
        <div ><Galeria></Galeria></div>
        <div><Facebook></Facebook></div>
        <div><Ayuda></Ayuda></div>

      </SwipeableViews> 

        );
}

export default Inicio;