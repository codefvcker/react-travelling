import React, { useState } from 'react'

import {Icon} from "../../components/Icon"
import {Input} from "../../components/Input"
import {Button} from '../../components/Button'

import './Search.css'

export const Search = ({ onSearch }) => {

    const [ value, setValue ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(onSearch) {
            onSearch(value)
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form 
            className="search"
            onSubmit={handleSubmit}
        >
            <div className="search__wrapper">
                <div className="search__icon">
                    <Icon name="map-marker-alt" />
                </div>
                    <Input 
                        className="search__input"
                        value={value}
                        onChange={handleChange}
                        id="search"
                        type='text'
                        placeholder="Input destination"
                    />
                <Button 
                    type="submit"
                    className="search__btn"
                >
                    <Icon name="angle-right" />
                </Button>
            </div>
        </form>
    )
}
