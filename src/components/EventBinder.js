import React, { Component } from 'react'

export class EventBinder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:"GoodBye"
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:'GoodBye!'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler}>Clicked</button> */}
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}

export default EventBinder
