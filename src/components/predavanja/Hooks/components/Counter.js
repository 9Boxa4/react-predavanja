import React, {useState} from 'react'


//  const initialFunction =() =>
//  {
//     return 4 
//  }

const Counter = () =>
{
    const [counter, setCounter] = useState(4) //moze da bude const[state,setState]

/*Primer =>  const [counter, setCounter] = useState(()=>
{
    return 4 
})*/


/* const [counter,setCounter]= useState(initialFunction)  - takodje nacin za pozivanje state-a  odvija se van useState-a jer mu treba da odradi funkciju, pa nakon toga dodje  */

    const handleDecrement = () =>
    {
        setCounter((prevState) => prevState -1)
    }

    return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span>{counter}</span>
        <button onClick={()=> setCounter(counter +1)}>+</button>
    </div>
    )
}

export default Counter 