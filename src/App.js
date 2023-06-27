import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';   // me traigo lo de defecto y la info de RICK 

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => alert('Emulamos que se cierra la card en esta pagina')}
         />
      </div>
   );
}

export default App;