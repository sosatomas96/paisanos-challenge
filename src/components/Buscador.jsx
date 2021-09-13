import React from 'react';

const Buscador = ({onChange}) => {

    const searchCharacter = (e) => {

        onChange(e.target.value);

    }

    return ( 
        <input
            placeholder='Filtra los personajes por su nombre'
            onChange={searchCharacter}
        />


     );
}
 
export default Buscador;