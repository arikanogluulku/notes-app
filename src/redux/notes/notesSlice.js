import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: nanoid(4), title: "note 1", color: "pink" },
      { id: nanoid(4), title: "note 2 ", color: "blue" },
      { id: nanoid(4), title: "note 3", color: "yellow" },
      { id: nanoid(4), title: "note 4", color: "white" },
    ],
    activeColor:localStorage.getItem('activeColor'),
    search:'',
  },
  reducers: {
    addNote: (state, action) => {
      const { title, color } = action.payload;
      state.items.push({
        id: nanoid(4),
        title,
        color,
      });
    },
    searchNote: (state, action) => {
    state.search = action.payload;
    },
    deleteNote: (state, action) => {
      const  id  = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    colorChange: (state, action) => {
      state.activeColor = action.payload;
    },
  },
});
export const {searchNote,addNote, colorChange, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
