import React from "react";
import { useContext } from "react";
import { institute, MyCounter, MyName } from "../App";


const Child4=()=>{
    const name=useContext(MyName);
    const inc=useContext(institute);
    const counter_Data=useContext(MyCounter);
    const {counter,handleChange}=counter_Data;
    return(
        <div>
             <h6>child four with useContext :{name},{inc}</h6>
             <hr />
             <div>Counter: {counter}</div>
             <button onClick={handleChange}>Click me</button>
        </div>
    )
}

export default Child4;