import React from 'react'
import classNames from 'classnames'

import './Article.css'

export const Article = ({ className, children, ...props }) => {

    const classes = classNames(
        'article',
        className
    )

    return (
        <article 
            {...props}
            className={classes}
        >
            {children}
        </article>
    )
}
