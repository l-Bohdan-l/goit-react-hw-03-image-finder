import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imgQuery: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ imgQuery: value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { imgQuery } = this.state;
    if (this.state.imgQuery.trim() === '') {
      toast.error('Empty input value');
      return;
    }
    this.props.onSubmit(imgQuery);
    this.setState({ imgQuery: '' });
  };

  // resetInput = e => {
  //     this.setState({ name: '', number: '' });
  // };
  render() {
    const { imgQuery } = this.state;
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <ImSearch />
          </button>

          <input
            value={imgQuery}
            onChange={this.handleChange}
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
