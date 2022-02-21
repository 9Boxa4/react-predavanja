import React, {useState, useEffect} from 'react'




    const Counter1 = () =>
    {
    const [state, setState] = useState({counter:4, color: "blue"}) ;
    const {counter,color} = state

    const handleDecrement = () =>
    {
        // setState((prevState) => prevState -1)
        setState((prevState) => {
            return {counter: prevState.counter -1}
        })
    }

    const changeColor = () =>
    {
        setState((prevState) =>
        {
            return {...prevState,color: "red"}
        })
    }

    // useEffect(()=> {
    //     console.log(`Render`);

    // }); 

    // useEffect(()=> {     //ponasa se kao componentDidMount, na samom pojavljivanju komponente se trigeruje
    //     console.log(`Render`);

    // },[]); 

    //samo kad se nesto promeni ce da se desi ovo iznad , tj kad se promeni boja u nasem slucaju
    useEffect(()=>
    {
        console.log(`Render`);
    },[state.color])



    useEffect(()=>
    {
        console.log(`Hello world`)
        //componenentWillUnmount se poziva sa returnom
        return () =>
        {
            console.log(`Do some cleanup`);
        }
    },[])

    return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span>{counter}</span>
        <span style={{marginLeft: 15}}>{color}</span>
        <button>+</button>
        <button onClick={()=> setState((prevState)=>
            {
                return {...prevState, color : "red"};
            })}>Change color</button>
    </div>
    )
}

export default Counter1 