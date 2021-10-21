import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/notes/notesSlice'
function Note({ note }) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        if (window.confirm('Are you sure ? ')) {
            dispatch(deleteNote(id))
        }
    }
    return (
        <div className={`note__item note__item-${note.color}`}>
            <p> {note.title} </p>
            <button className="note__delete" onClick={() => handleDelete(note.id)}>X</button>

        </div>
    )
}

export default Note
