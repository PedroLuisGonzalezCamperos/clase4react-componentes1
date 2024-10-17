import React from 'react'

const ItemListContainer = ({saludo}) => { // lo que se introduzca dentro del paréntesis se recibe como objeto y para obtener información del objeto se desestructura, esto lo hacemos usando llaves {saludos}
  return (
    <h2>{saludo}</h2>
  )
}

export default ItemListContainer