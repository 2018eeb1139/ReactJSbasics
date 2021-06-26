import React from 'react'

const person = ({person}) => {
    return (
        <div>
            <h2>My name is {person.name}. I am {person.age} years old. My skill is {person.skill}</h2>
        </div>
    )
}

export default person
