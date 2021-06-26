import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Vivek'
         }
         console.log('LifeCycleB constructor')
     }

     static getDerivedStateFromProps(state,props){
         console.log('LifeCycleB getDerivedFromState')
         return null
     }
     
     shouldComponentUpdate(){
        console.log('LifecycleB ShouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapShotBeforeUpadate')
       return null
    }

    componentDidUpdate(){
        console.log('LifecycleB CompomentDidUpdate')
    }

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
