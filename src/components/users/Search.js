import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propsTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.showAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: ' ' });
    }
  };
  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            onChange={this.onChange}
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
          />
          <input type='submit' value='search' className='btn btn-dark btn-block' />
        </form>
        {showClear ? (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
