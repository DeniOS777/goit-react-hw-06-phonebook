import { combineReducers, createSlice, nanoid } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: (name, number) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

// const deleteContact = contactId => {
//   setContacts(state => state.filter(({ id }) => id !== contactId));

//   const hasFilteredContacts =
//     getFilteredContacts().length - 1 === 0 && filter !== '';

//   if (hasFilteredContacts) {
//     clearFilterField();
//   }
// };
