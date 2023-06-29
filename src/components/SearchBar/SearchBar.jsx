
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   //console.log(props);
   return (
      <div className={style.nav}>
         <input  className = {style.searchInput}type='search' />
         <button className = {style.searchButton} onClick={onSearch}>Agregar</button> 
      </div>
   );
}
