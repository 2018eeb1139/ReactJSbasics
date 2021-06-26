import React from 'react'
import ReactDOM from 'react-dom'

const PortalDemo = () => {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById('root-portal')
    )
}

export default PortalDemo
