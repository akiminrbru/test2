import React from 'react';

function Input2(props) {
    return (
        <div className="input-form2">
            <input className="one" placeholder={props.pholder1}></input>
            <input className="two" placeholder={props.pholder2}></input>
        </div>
    )
}

export default Input2;