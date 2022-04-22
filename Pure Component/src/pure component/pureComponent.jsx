import React,{PureComponent} from "react"


class PureComponentEx extends PureComponent{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        console.log("Pure Component")
        return(
            <div>
                <h2>Pure Component</h2>
                <h3>Message::{this.props.message}</h3>
                Pure:
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
export default PureComponentEx;