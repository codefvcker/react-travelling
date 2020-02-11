import React, { Component } from 'react'

import {CurrentCity, Popular} from '../../containers'
import {Article} from '../../components'

import './Location.css'

export default class Location extends Component {
    render() {
        return (
            <section className="location">
                <Article>
                    <CurrentCity />
                </Article>  
                <Article>
                    <Popular />
                </Article>     
            </section>
        )
    }
}
