import Card from '../Card/Card';

import style from './Cards.module.css'

export default function Cards({characters}) {


   return( 
       <div className={style.contenedor}>
           {
              characters.map( ({id,name,status,species,gender,origin,image}) => {

               return (

                  <Card  
                  key = {id}  // esta es para React solamente
                  id  = {id}
                  name = {name}
                  status= {status}
                  species={species}
                  gender={gender}
                  image={image} 
                  origin={origin.name}
                  onClose={() => alert('Emulamos que se cierra la card')}
                  />

               )

              })

            }   
        </div> 
   
   )

}
