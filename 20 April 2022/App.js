
import React, { createContext, useState } from 'react';
import './App.css';

import Child1 from './ContextApi/child1';

//--------------------date : 20 April 2022---------------
//Context Api

export const MyName=createContext(); //-1st way
export const institute=createContext();
export const MyCounter=createContext();


function App(){
  const [counter,setCounter]=useState(0);
  const obj={
    counter,
    handleChange:()=>setCounter(counter+1)
  }
 
  //const MyName=createContext();//-2nd way
  return(
    <div className='App'>
      <h1>Counter:{counter}</h1>
      <MyName.Provider value={"Rutuja"}>
          <institute.Provider value={"Prepbytes"}>
            <MyCounter value={obj}>
              <Child1/> 
            </MyCounter>
          </institute.Provider>
      </MyName.Provider>

      
    </div>
  )
}

//export {MyName}//-2nd way


export default App;
