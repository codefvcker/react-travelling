import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Input.css'

export const Input = ({ id, className, name, label, type, ...props }) => {

    const classes = classNames(
        className,
    )

    return (
        <div className='input'>
            { label && 
            <label className="input-label" htmlFor={name}>{label}</label> }
            <div className="input-wrapper">
                <input
                    {...props}
                    name={id}
                    className={classes}
                />
            </div>
         </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
} 

Input.defaultProps = {
    className: ''
}
