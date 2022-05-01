import React from "react";
import { useState ,useEffect} from "react";
import IncCounterHOC from "./incCounterHOC";

const MouseOverCounter=(props)=>{
    const {name,counter,handleChange}=props
    //const [counter,setCounter]=useState(0);
    // useEffect(()=>{
    //     document.addEventListener('keydown',setCounter(counter+5))
    // })
    return(
        <>
        <h2 onMouseOver={handleChange}>Hover Counter :{counter}</h2>
        </>
    )
}
export default IncCounterHOC(MouseOverCounter);