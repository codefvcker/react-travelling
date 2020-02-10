import React from 'react'
import classNames from 'classnames'

import {Image} from '../Image'
import {Label} from '../Label'

import './PlaceCard.css'

export const PlaceCard = ({className, src, alt}) => {

    const classes = classNames(
        'place-card',
        className
    )

    return (
        <div className={classes}>
            <Image 
                src={src}
                alt={alt}
                className="place-card__image"
            />
            <div className="label-wrap">
                <Label 
                    type='light'
                    className='place-card__city-label'
                >
                    Berlin
                </Label>
            </div>
        </div>
    )
}
