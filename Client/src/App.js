import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { Routes,Route, useLocation } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
 
  const location = useLocation();

  const [characters,setCharacters] = useState([]) ;

  const onSearch = (id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}  

 const onClose = (id) => {
   const charactersFiltered = characters.filter(character => 
     character.id !== Number (id) )
             
     setCharacters(charactersFiltered)

 }
   return (
      <div className='App' style={{padding:"30px"}} >        

        {   
           location.pathname  !=  '/' ? <Nav onSearch={onSearch}/> : null
        
        }   
         <div>        
     
      <Routes>      
         <Route path = "/" element={<Form/>}/>
         <Route path="/home" element ={<Cards characters={characters} onClose={onClose} />}/> 
         <Route path="/about" element ={<About/>}/>  
         <Route path="/detail/:id" element ={<Detail/>}/> 
       </Routes>
         </div>  
         <hr/>            
      </div>
   );
}

export default App;
