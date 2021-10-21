import React from 'react'
import Buton from './Buton'
import './style.scss'
function ColorPalette() {
    return (
        <div className="color__container">
            <Buton color={'pink'} />
            <Buton color={'blue'} />
            <Buton color={'yellow'} />
            <Buton color={'white'} />
        </div>
    )
}

export default ColorPalette
