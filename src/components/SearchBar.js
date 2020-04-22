import React from 'react'
import { FaSearch } from 'react-icons/fa'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchedTerm: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      value: '',
      searchedTerm: this.state.value
    })
    // prevents the form from submitting and thus refreshing the page
    event.preventDefault();
  }

  render() {
    return (
      <form class="search-container" onSubmit={this.handleSubmit}>
        <i class="search-icon"><FaSearch /></i>
        <input class="search-box" type="search" value={this.state.value} onChange={this.handleChange} name="search" placeholder="Search..." />
        <input type="submit" value="Search" class="searchButton" />
      </form>
    )
  }
}

export default SearchBar;