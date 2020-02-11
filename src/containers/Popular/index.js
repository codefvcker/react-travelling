import React from 'react'
import {Link} from 'react-router-dom'

import {Label, Image, Icon} from '../../components'

import './Popular.css'

export const Popular = () => {
    return (
        <div className="popular">
            <div className="popular__top-wrap">
                <div className="popular__top-left">
                    <Label type="semi">
                        Popular
                    </Label>
                </div>
                <div className="popular__top-right">
                    <Label type="light">
                        More
                    </Label>
                </div>
                <div className="popular__content-wrap">
                    <div className="popular__content-top">
                        <div className="popular__content-top--left">
                            <Image 
                                src='https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg'
                                alt='City'
                                className='place-card__image'
                            />
                        </div>
                        <div className="popular__content-top--right">
                            <div className="popular__content-top--right__name">
                                <Label>
                                    Tian'anmen square
                                </Label>
                            </div>
                            <div className="popular__content-top--right__descr">
                                <Label>Museum</Label>
                                <Label>History</Label>
                                <Label>Square</Label>
                            </div>
                            <div className="popular__content-top--right__info">
                                <span>
                                    <Label type='light'>$5</Label>    
                                    <Label type='light'>6.2km</Label>   
                                </span>    
                            </div>  
                        </div>
                    </div>
                    <div className="popular__content-bottom">
                        <div className="popular__content--details">
                            <Link to="#">
                                <span>
                                    <Label>
                                        Details
                                    </Label>
                                    <Icon name="angle-right" />
                                </span>
                            </Link>
                        </div>
                        <div className="popular__content--navigation">
                        <Link to="#">
                                <span>
                                    <Label>
                                        Details
                                    </Label>
                                    <Icon name="angle-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
