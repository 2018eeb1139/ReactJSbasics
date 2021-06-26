import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Vivek'
         }
         console.log('LifecycleA constructor')
     }

     static getDerivedStateFromProps(state,props){
         console.log('LifecycleA getDerivedFromState')
         return null
     }
     
     shouldComponentUpdate(){
         console.log('LifecycleA ShouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate(prevProps,prevState){
         console.log('LifeCycleA getSnapShotBeforeUpadate')
        return null
     }

     componentDidUpdate(){
         console.log('LifecycleA CompomentDidUpdate')
     }

     changeState=()=>{
         this.setState({
             name:'Harshit'
         })
     }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
