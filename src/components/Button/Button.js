import React from 'react';

export default function Button(props) {
  const { disabled, icon, action: { onClick } } = props.state;

  return (
    <button
      className={disabled ? 'disabled-button' : ''}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
