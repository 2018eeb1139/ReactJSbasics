import React from 'react'
import ComponentC from './ComponentC'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

const ComponentE = () => {

    
    return (
        <div>
            ComponentE Context {this.context}
            <ComponentF/>
        </div>
    )
    }

  ComponentE.contextType=UserContext


export default ComponentE
