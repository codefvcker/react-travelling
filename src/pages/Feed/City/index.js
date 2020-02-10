import React from 'react'

export const City = ({ location, match }) => {
    console.log(match)
    return (
        <div>
            City : { match.params.name } and {location.href}
        </div>
    )
}
