import React,{useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  background: #FFCC29;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: .5rem;
  color: #fff;
  margin-top : 3rem;
  margin-bottom: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  :hover{
    cursor: pointer;
    background-size: 400px;
    background-color: #F58634;
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
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Link to='/inicio'>
            <img src={Logo} alt='logo'/>
          </Link>
        </Route>
        <Route path='/inicio'>
          <Contenedor>
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
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
