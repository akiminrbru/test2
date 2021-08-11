import React from 'react';

function Select(props) {
    return (
        <div className="slct">
            <select id={props.id1}>
                <option>{props.pholder}</option>
                <option>{props.pholder1}</option>
                <option>{props.pholder2}</option>
                <option>{props.pholder3}</option>
            </select>
            <div>
                <span id={props.id2}></span>
            </div>
        </div>
    )
}

export default Select;