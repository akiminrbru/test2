import React from 'react';

function Input(props) {
    return(
        <div className="input-form">
            <input placeholder={props.pholder}></input>
        </div>
    )
}

export default Input;