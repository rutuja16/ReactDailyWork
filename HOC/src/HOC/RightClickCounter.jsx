import React from "react";
import { useState } from "react";
import IncCounterHOC from "./incCounterHOC";

const RightClickCounter=(props)=>{
    const {name,counter,handleChange}=props
    return(
        <>
        <h2>Right Click Counter:{counter}</h2>
        <button onContextMenu={handleChange}>Click</button>
        </>
    )
}
const RightClick= IncCounterHOC(RightClickCounter)
export default RightClick;