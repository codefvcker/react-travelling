import React from 'react'

import {Image} from '../Image'

import './Avatar.css'

export const Avatar = ({src, alt, ...props}) => {
    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            className="avatar"
            circle
        />
    )
}
