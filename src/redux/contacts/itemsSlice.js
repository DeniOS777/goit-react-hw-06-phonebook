import { createSlice, nanoid } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [payload, ...state],
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

// const deleteContact = contactId => {
//   setContacts(state => state.filter(({ id }) => id !== contactId));

//   const hasFilteredContacts =
//     getFilteredContacts().length - 1 === 0 && filter !== '';

//   if (hasFilteredContacts) {
//     clearFilterField();
//   }
// };
