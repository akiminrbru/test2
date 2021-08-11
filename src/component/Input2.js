import React from 'react';

function Input2(props) {
    return (
        <div className="input-form2">
            <input id={props.id1} className="one" placeholder={props.pholder1}></input>
            <input id={props.id2} className="two" placeholder={props.pholder2}></input>
            <div>
                <span id={props.id3}></span>
                <span id={props.id4}></span>
            </div>
        </div>
    )
}

export default Input2;