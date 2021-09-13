import React from 'react';
import styled from '@emotion/styled';


const ContenedorFrase = styled.div`
    padding: 3rem;
    border: solid black 3px;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media (min-width: 992px){
        margin-top: 20rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -1rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
        height: 25%;
    }
`;

const Frase = ({frase}) => {

    

    return ( 
        <>
        <ContenedorFrase>
            <img src={frase.image} alt='Imágen de personaje'/>
            <h1>{frase.quote}</h1>
            <p>{frase.character}</p>
        </ContenedorFrase>
        
        </>
     );
}
 
export default Frase;