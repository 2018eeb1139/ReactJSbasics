import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vivek'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Vivek'
            })
        },2000)
    }

    render() {
        return (
            <div>
                Parent Component
                <MemoComp/>
                {/* <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
