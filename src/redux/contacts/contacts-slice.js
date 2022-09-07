import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStore,
  reducers: {
    addContacts: {
      reducer: (store, action) => {
        store.push(action.payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContacts: (store, action) => {
      return store.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

export default contactsSlice;
