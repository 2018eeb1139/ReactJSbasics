import React from 'react'
import { UserConsumer } from './UserContext'

const ComponentF = () => {
    return (
        <UserConsumer>
            {
                username=>{
                    return <div>hello {username}</div>
                }
            }
        </UserConsumer>
    )
}

export default ComponentF
