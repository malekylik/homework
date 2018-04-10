import React from 'react';

import './Message.css';

export default function Message(props) {
    return (
        <div className='Message'>
                <p className='Message__Content' onClick={props.onClick}>
                    {props.text}
                </p>
        </div>
    );
}
