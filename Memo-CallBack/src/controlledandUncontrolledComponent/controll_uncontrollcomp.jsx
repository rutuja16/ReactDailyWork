import { useState } from "react"

const ControlledAndUnControlledComponent=()=>{
    const [controlledValue,setControlledValue]=useState("");
    const [UnControlledValue,setUnControlledValue]=useState("");

    const handleChangeCC=(e)=>{
        console.log("Handle Change for Controlled")
        setControlledValue(e.target.value)
    }
    const handleChangeUCC=(e)=>{
        console.log("Handle Change for UnControlled")
        setUnControlledValue(e.target.value)
    }
    return(
        <div>
            <label>Controlled Componemnt</label>
            <input onChange={handleChangeCC} value={controlledValue} id="cc"></input><br></br>

            <label>UnControlled Componemnt</label>
            <input onChange={handleChangeUCC} value={UnControlledValue} id="ucc"></input>
        </div>
    )
}

export default ControlledAndUnControlledComponent;