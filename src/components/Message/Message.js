import React from 'react';

import './Message.css';

export default function Message(props) {
  return (
    <div className="Message">
      <button className="Message__Content" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
