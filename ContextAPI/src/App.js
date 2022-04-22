import React, { createContext, useState } from 'react';
import './App.css';
import Child1 from './ContextApi/child1';

const MyName=createContext();
export const Institute=createContext();
export const MyCounter=createContext();

function App() {
  const [counter,setCounter]=useState(0);

  const obj={
    counter,
    handleChange:()=>setCounter(counter+1)
  }

  return (
    <div className="App">
      <h2>App Counter :{counter} </h2>
      <MyName.Provider value={"RUTUJA"}>
        <Institute.Provider value={"Prepbyte"}>
          <MyCounter.Provider value={obj}>
            <Child1/>
          </MyCounter.Provider>
        </Institute.Provider>
      </MyName.Provider>
    </div>
  );
}

export {MyName};
export default App;
