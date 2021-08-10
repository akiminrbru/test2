import React from 'react';

function Select(props) {
    return (
        <div className="slct">
            <select>
                <option>{props.pholder}</option>
                <option>{props.pholder1}</option>
                <option>{props.pholder2}</option>
                <option>{props.pholder3}</option>
            </select>
        </div>
    )
}

export default Select;