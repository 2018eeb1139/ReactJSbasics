import React from 'react'
import Person from './components/Person'

const PersonList = () => {
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:29,
            skill:'Batman'
        },
        {
            id:2,
            name:'Diana',
            age:25,
            skill:'Wonder Woman'
        },
        {
            id:3,
            name:'Clark',
            age:30,
            skill:'Superman'
        }
    ]
    const personLists=persons.map(person=> <Person key={person.id} person={person}/>)
    return (
        <div>
            {personLists}
        </div>
    )
}

export default PersonList
