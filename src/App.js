import './App.scss';
import React from 'react';
import { Component } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { fetchImages } from './services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';

class App extends Component {
  state = {
    modalContent: '',
    searchQuery: '',
    page: 1,
    visibleImages: [],
    isLoading: false,
    openModal: false,
  };

  handleSubmit = imgQuery => {
    this.setState({ searchQuery: imgQuery });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  nextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer />
        <ImageGallery
          imgQuery={this.state.searchQuery}
          page={this.state.page}
        />
        <Button onClick={this.nextPage} />
      </div>
    );
  }
}

export default App;
