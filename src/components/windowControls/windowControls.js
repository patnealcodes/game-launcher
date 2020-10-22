import React from 'react'

function WindowControls() {
    return (
        <div>
            <button onClick={() => alert('Minimize!')}>_</button>
            <button onClick={() => alert('Maximize!')}>^</button>
            <button onClick={() => alert('Close!')}>x</button>
        </div>
    )
}

export default WindowControls