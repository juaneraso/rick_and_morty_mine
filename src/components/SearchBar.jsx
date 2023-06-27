export default function SearchBar({onSearch}) {

   //console.log(props);
   return (
      <div>
          <input type='search' />
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
