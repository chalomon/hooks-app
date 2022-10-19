import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})

useEffect(() => {
  //Se ejecuta cuando el componente se crea

    const onMouseMove = ({x, y}) =>{
        setCoords({x, y});
    }

    window.addEventListener('mousemove', onMouseMove);
    

  return () => {
    //Se ejecuta cuando el componente se destruye
    window.removeEventListener('mousemove', onMouseMove);

  }
}, [])


  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
