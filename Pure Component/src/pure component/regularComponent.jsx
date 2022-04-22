import React,{ Component } from "react";


class RegularComponentEx extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        console.log("Regular Component")
        return(
            <div>
                <h2>Regular Component </h2>
                <h3>Message::{this.props.message}</h3>
                Regular:
                {
                    this.props.arr.map((val)=>(
                    <span>{`${val}`}<span> </span></span>
                    ))
                }
                <hr></hr>
            </div>
        )
    }

}
export default RegularComponentEx;