import React, { Component } from "react"
import './App.css';
import PureComponentEx from "./pure component/pureComponent";
import RegularComponentEx from "./pure component/regularComponent";

//----------------------date : 21 April 2022------------------------
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:"Hello",
      arr:[10,20,30]
    }
  }

  componentDidMount(){
    // setInterval(()=>{
    //   this.setState({
    //     msg:"Welcome"
    //   })
    // },2000)

    setInterval(()=>{
      const val=Math.round(10*Math.random())
      const updatedArr=[...this.state.arr,val]
      this.setState({
        msg:"Welcome",
        arr:updatedArr
      })
    },2000)

  }

  render(){
    console.log("Parent Component")
    return(
      <div className="App">
        <h2>Parent Component </h2>
        <h3>Message:{this.state.msg}</h3>
        Parent:
        {
          this.state.arr.map((val)=>(
            <span>{`${val}`}<span> </span></span>
          ))
        }
        <hr></hr>

        <RegularComponentEx arr={this.state.arr} message={this.state.msg}></RegularComponentEx>
        <PureComponentEx arr={this.state.arr} message={this.state.msg}></PureComponentEx>
      </div>
    )
  }
}


export default App;
