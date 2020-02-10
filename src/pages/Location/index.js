import React, { Component } from 'react'

import {Chip} from '../../components/Chip'

import './Location.css'

export default class Location extends Component {
    render() {
        return (
            <div>
                <Chip className='mychip' iconName='search' withIcon withClose>
                    Golangsdassdasdasasd
                </Chip>
            </div>
        )
    }
}
