import style from './Card.module.css' ; 
import { Link } from 'react-router-dom';

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   
   return (
      <div className={style.contenedor}>
         
         <button onClick={ () => onClose(id)}  className={style.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status: {status}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' /> 
         
         
      </div>
   );
}
