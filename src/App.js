import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import FraseList from './components/FraseList';
import Buscador from './components/Buscador';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: --webkit-gradient(top left, #007d35 0%, #007d35 40%, #0f574e #100);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: .5rem;
  color: #fff;
  margin-top : 3rem;
  margin-bottom: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }

`;

function App() {

  const [frases, setFrases] = useState([]);
  // let frases = [];
  const [frasesFiltradas, setFrasesFiltradas] = useState([]);
  const [filtroPersonaje, setFiltroPersonaje] = useState('');


  const filterQuotes = () =>{
    const result = filtroPersonaje === '' ? frases : frases.filter((frase)=>
      frase.character.toLowerCase().includes(filtroPersonaje.toLowerCase())
    )

    setFrasesFiltradas(result);
  
    console.log(result);
  }



  
  const requestAPI = async () => {

    const api = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=15');

    const data = await api.json();

    setFrases(data);
    // frases = [...data];
    // filterQuotes();

    setFrasesFiltradas(data);
    
  };

  

  useEffect( ()=> {
    requestAPI();
  }, [])


  const filterCharacter = (searchText) =>{

    setFiltroPersonaje(searchText);
    filterQuotes();

  }



  return (
    <Contenedor>

      <Buscador
        onChange={filterCharacter}
      />

      <FraseList
        frases={frasesFiltradas}
      />
      
      <Boton
        onClick={() => requestAPI()}
      >
        ¡Quiero ver más frases de los Simpson!
      </Boton>
    </Contenedor>
  );
}

export default App;
