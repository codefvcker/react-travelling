import React from 'react'
import {Link} from 'react-router-dom'

import {Label} from '../../components/Label'
import {Card} from '../../components/Card'

import './Scenery.css'

export const Scenery = () => {
    return (
        <div className="scenery">
            <div className="scenery__top-wrap">
                <div className="scenery__top-wrap__left">
                    <Label type="semi">Daily Scenery</Label>
                    <Label 
                        type="semi"
                        className="updated"
                    >
                        Updated
                    </Label>
                </div>
                <div className="scenery__top-wrap__right">
                    <Link to="#">
                        <Label type="light">More</Label>
                    </Link>
                </div>
            </div>
            <div className="scenery__bottom-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                {/* <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div>
                <div className="card"><h2>Card</h2></div> */}
            </div>  
    </div>    
    )
}
