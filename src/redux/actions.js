// import { nanoid } from 'nanoid';
// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction(
//   'contacts/addContact',
//   ({ name, number }) => {
//     return {
//       payload: {
//         id: nanoid(6),
//         name,
//         number,
//       },
//     };
//   }
// );

// console.log(addContact.type);
// console.log(addContact.toString())

// export const addContact = ({ name, number }) => {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(6),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = createAction(
//   'contacts/deleteContact',
//   contactId => {
//     return {
//       payload: contactId,
//     };
//   }
// );

// // export const deleteContact = contactId => {
// //   return {
// //     type: "contacts/deleteContact",
// //     payload: contactId,
// //   };
// // };

// export const findContact = createAction('filter/findContact', value => {
//   return {
//     payload: value,
//   };
// });

// // export const findContact = value => {
// //   return {
// //     type: "filter/findContact",
// //     payload: value,
// //   };
// // };
