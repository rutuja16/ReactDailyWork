import React, { memo } from "react"

function ReactMemoExample(props){
    //console.log("React Memo")
    const {num,counter,handlechange}=props

    
    
    return(
        <div>
            <hr></hr>
            <h1>React Memo</h1>
            <h4>Number:{props.num}</h4>
            <h1>React CallBack</h1>
            <h4>Counter :{props.counter} </h4>
            <button onClick={props.handlechange}>Click</button>
        </div>
    )
}
// const memorizedReactMemoEx=memo(ReactMemoExample)
// export default memorizedReactMemoEx

//or
export default memo(ReactMemoExample)