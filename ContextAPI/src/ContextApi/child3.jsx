import React from "react";
import { MyName,Institute } from "../App";

const Child3=()=>{
    return(
        <MyName.Consumer>
            {(name)=>{
                return(
                    <Institute.Consumer>
                        {(ins)=>{
                            return (<h3>My Name is {name} ={ins}</h3>)
                        }}
                    </Institute.Consumer>
                )
            }}
            
        </MyName.Consumer>

    )
}

export default Child3;