import './Button.css';
import React from 'react'

export default function Button({ color, text, actFunction}) {
    return (
        <div>
            <button style = {{color:color}} className = 'btnMedium' onClick = {actFunction} >{text}</button>
        </div>
    )
}
