import React,{useEffect,useState,useCallback} from "react"
import './App.css';

import ControlledAndUnControlledComponent from './controlledandUncontrolledComponent/controll_uncontrollcomp';
import ReactMemoExample from './memo&callback/reactMemoAndCallBack';

function App(){
  const [msg,setMsg]=useState("Welcome");
  const [num,setNum]=useState(Math.random())
  const[counter,setCounter]=useState(0);

  useEffect(()=>{
    console.log("Random Number is Updated")
  },[num])

  useEffect(()=>{
    setInterval(()=>{
      console.log("Interval Created")
      // setMsg(msg +" "+"Rutuja")
      setNum(Math.random().toFixed(3)) //for this random number is updated on console
      //setNum(100);
    },10000)
  })

  //regular function
  // const handleChange1=()=>{
  //   console.log("counter updated")
  //   setCounter(counter+10);
  // }

  //useCallBack-2 parameter(fun and dependacy) --point to same memory block
const handleChange=useCallback(()=>{
  console.log("counter updated")
  setCounter(counter+10)
},[counter])



  return(
    <div className='App'>
      <h2>App Component</h2>
      <h4>Message : {msg}</h4>
      <ReactMemoExample num={num} handlechange={handleChange} counter={counter}></ReactMemoExample>
      <ControlledAndUnControlledComponent></ControlledAndUnControlledComponent>
      <hr></hr>
    </div>
  )
}

export default App;