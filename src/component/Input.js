import React from 'react';

function Input(props) {
    return(
        <div className="input-form">
            <input id={props.id1} placeholder={props.pholder}></input>
            <div>
                <span id={props.id2}></span>
            </div>
        </div>
    )
}

export default Input;