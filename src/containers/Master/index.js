import React from 'react'
import {Link} from 'react-router-dom'

import {Label} from '../../components/Label'
import {Avatar} from '../../components/Avatar'

import './Master.css'

export const Master = () => {
    return (
        <div className="master">
            <div className="master__top-wrap">
                <span className="master__top-content">
                    <Label type='semi'>
                        Master
                    </Label>
                </span>
            </div>
            <div className="master__content-wrap">
                <div className="master__content--left">
                    <Avatar 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToFZNX48KoW7-qSlsg0Yeqeq3XNpMdnZRqLMtllRM7myROLhvy'
                        alt='user'
                    />
                    <Avatar 
                        src='https://i.pinimg.com/originals/c3/b2/5b/c3b25bd16502879004f97217a07fc574.jpg'
                        alt='user'
                    />
                    <Avatar 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAyDjD7nuNXYSm-uCo9ttIyBY0zrdYjiTc0IcaDUh3dykSQFfA'
                        alt='user'
                    />
                    <Avatar 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8WD1FlM92qR3Qz47ZG5sy6Ads9-udgDzq5riK91I1QiNEFTNO'
                        alt='user'
                    />
                </div>
                <div className="master__content--right">
                    <Link to='#'>
                        <Label type="light">
                            Join them.
                        </Label>
                    </Link>
                </div>
            </div>
        </div>
    )
}
