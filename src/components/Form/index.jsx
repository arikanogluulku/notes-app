import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../../redux/notes/notesSlice'
import './style.scss'
function Form() {
  const [title, setTitle] = useState('')
  const activeColor = useSelector(state => state.notes.activeColor)
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    if(!title) return;
    e.preventDefault();
    dispatch(addNote({ title, color: activeColor }))
    setTitle('')
  }

  return (
    <form className="form__container" >
      <textarea
        placeholder="input note..."
        className="form__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="form__button" onClick={handleAdd}>
        Add
      </button>
    </form>
  )
}

export default Form
