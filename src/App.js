import './App.scss';
import React from 'react';
import { Component } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { fetchImages } from './services/apiService';

class App extends Component {
  state = {
    modalContent: '',
    searchQuery: '',
    page: 1,
    visibleImages: [],
    isLoading: false,
    openModal: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <Searchbar />
      </div>
    );
  }
}

export default App;
