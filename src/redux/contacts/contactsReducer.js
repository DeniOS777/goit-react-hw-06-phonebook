import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contactsActions';

export const itemsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => (state = action.payload),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
