import PropTypes from 'prop-types'
import React from "react";
import Button from '@mui/material/Button'

const customButton = ({color, text, onClick}) => {

    return (
        <Button
        variant='contained'
        onClick = {() => onClick(text)}
        sx = {{m: 2, background: color}}
        >
        {text}
        </Button>
    )
}

customButton.defaultProps = {
    color: 'steelblue',
}

customButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default customButton