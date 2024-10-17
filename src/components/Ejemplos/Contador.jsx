import React from 'react'
import { useState } from 'react' // useState sería un hook de estado
import ContadorView from './ContadorView'

const Contador = () => {
const [contador, setContador] = useState(0)//aquí dentro del array el primer valor "contador" tiene el valor inicial de la variable de estado, el segundo valor será la función para actualiar el estado la cual por convensión lelva el prefijo set al principio. 0 en useState es el valor inicial.

//Los hooks se colocan en la árte de arriba pegado del nombre de la función. Todos los hooks comienzan con el prefijo "use"

const aumentarContador = () => {

if (contador<10) {

    setContador(contador +1)

}


}


  return ( //antes en donde estaba ContadorView había un código el cual se está importando ahora del componente ContadorView
<ContadorView contador2 = {contador} aumentarContador2 ={aumentarContador}/>
  )
}

export default Contador