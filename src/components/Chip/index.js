import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {Icon} from '../Icon'

import './Chip.css'

export const Chip = ({
    children, withIcon, withClose, iconName, className,
    onChipClick, onCloseClick, id, ...props
}) => {

    const classes = classNames(
        'chip',
        className
    )

    const onChipClickAction = () => {
        onChipClick(id)
    }

    const onCloseClickAction = (e) => {
        e.stopPropagation()
        onCloseClick(e, id)
    }

    return (
        <div className={classes} onClick={onChipClickAction}>
            {withIcon &&
                <span className="chip-icon">
                    <Icon 
                        name={iconName}
                    />
                </span>
            }
            <span className="chip-text">{children}</span>
            {withClose && 
                <span className="chip-close" onClick={(e) => {onCloseClickAction(e)}}>
                    <Icon name="times" />
                </span>
            }
        </div>
    )
}

Chip.propTypes = {
    children: PropTypes.string,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    iconName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onChipClick: PropTypes.func,
    onCloseClick: PropTypes.func,
}

Chip.defaultProps = {
    text: 'Default chip',
    withIcon: false,
    withClose: false,
    iconName: 'icon',
    className: '',
    id: null,
    onChipClick: () => {},
    onCloseClick: () => {},
}


