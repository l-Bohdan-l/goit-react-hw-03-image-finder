import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

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
    this.props.onSubmit(imgQuery);
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
            <span class="button-label">Search</span>
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
