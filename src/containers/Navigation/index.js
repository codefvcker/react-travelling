import React from 'react'
import { NavLink } from 'react-router-dom'

import {Icon} from '../../components/Icon'

import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink exact to="/" className="navigation__item">
                <Icon name="align-justify" />
            </NavLink>
            <NavLink to="/location" className="navigation__item">
                <Icon name="map-marker-alt" />
            </NavLink>
            <NavLink to="/profile" className="navigation__item">
                <Icon name="user" />
            </NavLink>
        </nav>
    )
}
