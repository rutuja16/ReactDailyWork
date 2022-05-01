import React from "react";
import { useState } from "react";
import IncCounterHOC from "./incCounterHOC";

const ClickCounter=(props)=>{
    const {name,counter,handleChange}=props
    return(
        <>
        <h2 >{name} Click Counter:{counter} times</h2>
        <button onClick={handleChange}>Click</button>
        </>
    )
}
export default IncCounterHOC(ClickCounter);