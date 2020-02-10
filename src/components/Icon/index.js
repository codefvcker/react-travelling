import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Icon.css'


export const Icon = ({ className, name, ...props }) => {

    const classes = classNames(
        'fas',
        `fa-${name}`,
        className,
    )

    return (
        <i 
            className={classes}
       />
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
}

Icon.defaultProps = {
    className: '',
    name: ''
}