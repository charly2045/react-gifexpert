import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp =h1 => {

  //usestate hook de react que almacenará de manera persistente el listado de gifs
  const [ categories, setCategories ] = useState([ 'One Punch' ])
  
  const onAddCategory = (newCategory) => {

    //si el nuevo valor ya existe sale de la función
    if (categories.includes(newCategory)) return;
 
    //en react hay que intentar no usar el push ya que muta el objeto, 
    //en su defecto hacemos una copia del arreglo con el operador sprend y añadimos otro elemento
    setCategories([newCategory, ...categories]);
    
    // setCategories( cat => [...cat, 'Valorant'] )
  }

  return (
    <>
    
      <h1>GifExpertApp</h1>

      {/* Componente (en otro archivo) que maneja el input */}
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value)}
      />
      
      {/* usamos map para recorer el arreglo y genrar el listado, 
      nota: react aconseja no usar el indice de los map.
      hemos simplicado la función quitando la llaves({}) y el return */}
      { categories.map((category) => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          )) 
      }
        
    </>
  )
}
