import React,{useState, useEffect} from 'react';
import Logo from '../src/logo.svg'
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import Frases from './components/Frases';
import Navbar from './components/Nav';
import Footer from './components/Footer';


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
  
  const requestAPI = async () => {

    const api = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=15');

    let data = await api.json();

    data = data.map((item)=>{
      return {
        ...item,
        id: uuidv4()
      }
    })

    setFrases(data);
    
  };

  useEffect( ()=> {
    requestAPI();
  }, [])

  return (
    <Contenedor>

      {/* <img src={Logo} alt='logo'/> */}

      <Navbar/>

      <Frases 
        frases={frases}
      />
      
      <Boton
        onClick={() => requestAPI()}
      >
        ¡Quiero ver más frases de los Simpson!
      </Boton>

      <Footer/>
    </Contenedor>
  );
}

export default App;
