import React from 'react'

function Joke(props){
    return(
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            {/* Another way to deal with the same thing */}
            {/* <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3> */}
            <h3>Punchline: {props.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke