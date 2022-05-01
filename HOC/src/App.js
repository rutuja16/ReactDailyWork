import React from 'react';
import './App.css';
import ClickCounter from './HOC/clickCounter';
import MouseOverCounter from './HOC/mouseOverCounter';
import RightClickCounter from './HOC/RightClickCounter';

function App(){
  return(
        <div className='App'>
          <h2>Higher Order Function</h2>
          <hr/>
          <ClickCounter></ClickCounter>
          <MouseOverCounter></MouseOverCounter>
          <RightClickCounter></RightClickCounter>

          <hr/>
        </div>
  )
}

export default App;