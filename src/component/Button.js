import React from 'react';

function Button(props) {
    return (
        <div className="button">
            <button onClick={props.create}>Создать клиента</button>
        </div>
    )
}

export default Button;