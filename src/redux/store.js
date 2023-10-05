
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlise';

export const store = configureStore({
  reducer: {
    contactList: contactReducer,
  },
});
