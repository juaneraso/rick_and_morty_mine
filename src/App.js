import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';   // me traigo lo de defecto y la info de RICK 

function App() {
   return (
      <div className='App' style={{padding:"30px"}} >
         <div>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         </div>     
         <div>
         <Cards characters={characters} />  
         </div>  
         <hr/>            
      </div>
   );
}

export default App;
