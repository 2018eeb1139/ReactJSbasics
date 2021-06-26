import React from 'react';

// function Greet(){
//     return <h1>Hello Vivek</h1>;
// }
const Greet = (props) => {
    return (
        <>
            <h1>Heloo {props.name} a.k.a {props.hero}</h1>
            {props.children}
        </>
    )
}

export default Greet