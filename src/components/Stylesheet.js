import React from 'react'
import './mystylesheet.css'

const Stylesheet = (props) => {
    let classname=props.primary?'primary':''
    return (
        <div>
            <h1 className={classname}>StyleSheets</h1>
            <h1 className="error">Error</h1>
            <h1 className="success">Success</h1>
        </div>
    )
}

export default Stylesheet
