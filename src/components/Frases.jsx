import React,{useState} from 'react';
import FraseList from './FraseList';
import Buscador from './Buscador';

const Frases = ({frases}) => {

    
    const [filtroPersonaje, setFiltroPersonaje] = useState('');

    const filterCharacter = (searchText) =>{

        setFiltroPersonaje(searchText);
      }

      const frasesFiltradas = 
        frases.filter(
            (frase)=>{
                return frase.character.toLowerCase()
                    .includes(filtroPersonaje.toLowerCase())
            }
            )
          
    return ( 
        <>
            <Buscador
            onChange={filterCharacter}
            />
        
            <FraseList
            frases={frasesFiltradas}
            />
        </>
     );
}
 
export default Frases;