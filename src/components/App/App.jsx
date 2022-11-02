import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhonebookTitle, Wrapper } from './App.styled';

const LOCAL_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsData = localStorage.getItem(LOCAL_KEY);
    if (contactsData) {
      const parsedContacts = JSON.parse(contactsData);

      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts));
    }
  }


  deleteContactFromState = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        item => e.target.dataset.id !== item.id
      ),
    });
  };

  saveDataFromInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  saveDataToState = (name, number) => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contact`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  getFilteredContacts = e => {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Wrapper>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm saveDataToState={this.saveDataToState} />

        <Filter value={this.state.filter} change={this.saveDataFromInput} />
        <ContactList
          deleteContact={this.deleteContactFromState}
          contacts={this.getFilteredContacts()}
        />
      </Wrapper>
    );
  }
}
