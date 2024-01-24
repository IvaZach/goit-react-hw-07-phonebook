// import { addContact, deleteContact, findContact } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// ];

// export const contactsReducer = createReducer(contactsInitialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       if (state.find(contact => contact.name === action.payload.name)) {
//         alert(`${action.payload.name} is already in contacts.`);
//         return state;
//       }
//       state.push(action.payload)
//     })
//     .addCase(deleteContact, (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     });
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, builder => {
//   builder.addCase(findContact, (state, action) => {
//     return action.payload;
//   });
// });
