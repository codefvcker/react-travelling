import React from 'react'
import classNames from 'classnames'

import './Label.css'

export const Label = ({ className, children, type, ...props}) => {

    const classes = classNames(
        'label',
        type,
        className
    )

    return(
        <span 
            {...props}
            className={ classes }
        >
            { children }
        </span>
    )

}
