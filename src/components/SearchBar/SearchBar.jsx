
import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

  
   const [id,setId] = useState('') ;

   const handleChange =(event) => {

      setId(event.target.value);
      


   }

 

   //console.log(props);
   return (
      <div className={style.nav}>
         <input  className = {style.searchInput}type='search' onChange={handleChange} value={id}/>
         <button className = {style.searchButton} onClick={() => {onSearch(id);setId('')}}>Agregar</button> 
      </div>
   );
}
