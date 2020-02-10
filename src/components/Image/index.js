import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Image.css'

export const Image = ({ src, alt, circle, className, ...props }) => {

    const classes = classNames(
        className,
        { circle }
    )   

    return (
        <img
            {...props}
            src={src}
            alt={alt}
            className={classes}    
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    circle: PropTypes.bool,
    className: PropTypes.string,
}

Image.defaultProps = {
    src: 'https://glowvarietyshow.com/wp-content/uploads/2017/03/placeholder-image.jpg',
    alt: 'image',
    circle: false,
    className: '',
}

