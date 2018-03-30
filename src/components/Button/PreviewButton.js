import React from 'react';

export function PreviewButton(props){
    let button;
    
    if(props.disabled){
        button = (      <button className='disabled-preview-button' 
                                onClick={props.onClick} disabled>
                            {props.icon}
                        </button>
                );
    }else{
        button = (  <button onClick={props.onClick}>
                        {props.icon}
                    </button>
                );
    }

    return button;
}
