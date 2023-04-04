import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState()

  //nos permite escrivir en el formulario a traves del hook que maneja su estado
  const onInputChange = (event) => {
    setInputValue(event.target.value);
    
  }

  //captura lo que se ha escrito al pulsar enter
  const onSubmit = (event) => {
    event.preventDefault()

    //si hay 1 o menos letras sale de la función (no guarda el input)
    if (inputValue.trim().length <= 1) return;

    //llamamos a la función que se encarga de añadir categorias en otro componete a traves de las props y añadimos el valor del input
    onNewCategory( inputValue.trim() )

    //vaciamos el arreglo
    setInputValue([''])
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange } // (event) => onInputChange(event) == onInputChange
      />
    </form>
  )
}
