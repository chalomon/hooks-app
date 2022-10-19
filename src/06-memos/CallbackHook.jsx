import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( //Es como el memo pero para funciones
      (value) => {
        setCounter((c) => c+value)
      },
      [],
    )

    // useEffect(() => {
    //     incrementFather();
    // }, [incrementFather]) Solo se dispara cuando la función cambia
    
    

    // const incrementFather = () => {
    //     setCounter(counter+1)
    // }

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
