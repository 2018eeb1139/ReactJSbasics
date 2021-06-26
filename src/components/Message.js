import React, { Component } from "react";

class Message extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thankyou For subscribing'
        })
    }
    render(){
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}

export default Message;

