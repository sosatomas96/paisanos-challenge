import React from 'react';
import styled from '@emotion/styled'

const Filtro = styled.input`
margin-top: 3rem;
    width: 50%;
    height: 3rem;
    border: solid 2px black;
    border-radius: 5px;
`

const Buscador = ({onChange}) => {

    const searchCharacter = (e) => {

        onChange(e.target.value);

    }

    return ( 
        <Filtro
            placeholder='Filtra los personajes por su nombre'
            onChange={searchCharacter}
        />


     );
}
 
export default Buscador;