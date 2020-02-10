import React from 'react'

export const withFeed = (Component) => (props) => {
    return <Component {...props}  onFeed={() => console.log('DA')} /> 
}
