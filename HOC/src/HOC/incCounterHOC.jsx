import React,{useState} from "react";
import { Component } from "react";

const IncCounterHOC=(Comp)=>{
    //class HOC Function

    class AddCounterFunction extends Component{
        constructor(props){
            super(props);
            this.state={
                counter:0
            }
        }

        handleChange=(e)=>{
            e.preventDefault();
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render(){
            return(
                <Comp 
                    name="Rutuja"
                    counter={this.state.counter} 
                    handleChange={this.handleChange}
                />
                );
        }
    }

    //------------------------------

    //Functional Component
    // function AddCounterFunction(){
    //     const [counter,setCounter]=useState(0)
    //     return(
    //         <Comp
    //             name="Rutuja"
    //             counter={counter} 
    //             handleChange={()=>{setCounter(counter+1)}}
    //         />
    //     );
    // };

    //------------------------
    return AddCounterFunction;
}

export default IncCounterHOC;