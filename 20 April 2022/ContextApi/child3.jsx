import React from "react";
import { MyName,institute } from "../App";

const Child3=()=>{
    return(
        <MyName.Consumer>
            {(name)=>{
                return(
                    <institute.Consumer>
                        {(ins)=>{
                            return (<h3>My Name is {name} ={ins}</h3>)
                        }}
                    </institute.Consumer>
                )
            }}
            
        </MyName.Consumer>

    )
}

export default Child3;