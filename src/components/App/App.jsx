import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';

import { PhonebookTitle, Wrapper } from './App.styled';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const getSavedContacts = () => {
    const contactsData = localStorage.getItem(LOCAL_KEY);
    if (contactsData) {
      const parsedContacts = JSON.parse(contactsData);

      return parsedContacts;
    } else {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  };

  const [contacts, setContacts] = useState(getSavedContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactFromState = e => {
    setContacts(contacts.filter(item => e.target.dataset.id !== item.id));
  };

  const saveDataFromInput = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const saveDataToState = (name, number) => {
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contact`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const getFilteredContacts = e => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm saveDataToState={saveDataToState} />

      <Filter value={filter} change={saveDataFromInput} />
      <ContactList
        deleteContact={deleteContactFromState}
        contacts={getFilteredContacts()}
      />
    </Wrapper>
  );
};
