import './App.scss';
import React from 'react';
import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactsList } from './components/ContactList/ContactList';
import { Container } from './components/Container/Container';
import { nanoid } from 'nanoid';
import { Filter } from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem('contacts');
    const parsedStoragedContacts = JSON.parse(contactsFromStorage);
    if (parsedStoragedContacts) {
      this.setState({ contacts: parsedStoragedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const dublicateContact = contacts.some(checkedContact => {
      return checkedContact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseFilter),
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Container title="Phonebook">
            <ContactForm onSubmit={this.createContact} />
          </Container>
          <Container title="Contacts">
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDelete={this.deleteContact}
            ></ContactsList>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
