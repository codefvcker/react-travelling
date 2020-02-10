import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Button.css'

export const Button = ({
        className, onClick, children, disabled, active, ...props 
    }) => {

    const classes = classNames(
        { active },
        classNames,
        'btn',
    )

    return (
        <button 
            {...props}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
}

Button.defaultProps = {
    className: '',
    onClick: () => {},
    children: 'Default button',
    disabled: false,
    active: false,
}
