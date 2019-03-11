import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const LinkBtn = ({ to, label }) => {
    return (
        <NavLink to={to}>
            <button>
                <span>{label}</span>
            </button>
        </NavLink>
    )
}

LinkBtn.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default LinkBtn