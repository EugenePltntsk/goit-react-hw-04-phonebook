import React from 'react';
import PropTypes from 'prop-types';
import { ContactsTitle, List } from './ContactList.styled';
import { ContactElement } from 'components/ContactElement';

export function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <List>
        {contacts.map(item => (
          <ContactElement
            deleteContact={deleteContact}
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
