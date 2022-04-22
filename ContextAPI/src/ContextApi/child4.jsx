import React from "react";
import { useContext } from "react";
import { Institute, MyCounter, MyName } from "../App";


const Child4 =()=>{
    const name=useContext(MyName);
    const inc=useContext(Institute);
    const counterData=useContext(MyCounter);
    const {counter,handleChange}=counterData;
    return(
        <div>
             <h6>child four with useContext :{name},{inc}</h6>
             <p>Counter: {counter}</p>
             <button onClick={handleChange}>Click me</button>
        </div>
    )
}

export default Child4;