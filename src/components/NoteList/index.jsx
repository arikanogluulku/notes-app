import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import './style.scss'
function NoteList() {
    const notes = useSelector((state) => state.notes.items)
    const searchInput = useSelector((state) => state.notes.search)

    let noteList = notes;
    if (searchInput) {
        noteList = notes.filter((note) =>
            note.title.toLowerCase().includes(searchInput.toLowerCase())
        )
    }
    return (
        <div className="note__list">
            {
                noteList.map((note) =>
                    <Note key={note.id} note={note} />
                )
            }
        </div>
    )
}

export default NoteList
