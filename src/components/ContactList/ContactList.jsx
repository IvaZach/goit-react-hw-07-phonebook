import React from 'react';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

const getVisibleContacts = (contacts, query) => {
  if (query !== '') {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase().trim())
    );
  }
  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);
  console.log(visibleContacts);

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
