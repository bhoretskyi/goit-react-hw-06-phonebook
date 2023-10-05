// redux/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;
export default contactSlice.reducer;
