import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchNote } from '../../redux/notes/notesSlice'
import './style.scss'
function Search() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchNote(search))
    }, [dispatch, search])
    return (
        <form className="search">
            <input
                type="text"
                placeholder="search note"
                className="search__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search
