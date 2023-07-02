import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { Routes,Route } from 'react-router-dom';

function App() {

  const [characters,setCharacters] = useState([]) ;

  const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
         <div>
         <Nav  onSearch = {onSearch} />
     
      <Routes>      
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
