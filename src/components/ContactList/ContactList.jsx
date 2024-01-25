import React from 'react';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts)
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactListItem name={name} number={number} id={id} key={id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
