import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChange } from '../../redux/notes/notesSlice'
function Buton({ color }) {
    const activeColor = useSelector(state => state.notes.activeColor)
    const dispatch = useDispatch()
    const handleChangeColor = () => {
        dispatch(colorChange(color))
        localStorage.setItem('activeColor', color)
    }
    return (
        <button className={`color__button color__button-${color}`}
            onClick={() => handleChangeColor()}
        >{activeColor === color ? '✓' : ' '} </button>
    )
}

export default Buton
