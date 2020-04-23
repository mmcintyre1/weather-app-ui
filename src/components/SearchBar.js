import React from 'react'
import { FaSearch } from 'react-icons/fa'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchedTerm: "abc"
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
      <form className="searchContainer" onSubmit={this.handleSubmit}>
        <i className="searchIcon"><FaSearch /></i>
        <input className="searchBox" type="search" value={this.state.value} onChange={this.handleChange} name="search" placeholder={this.props.placeholder} />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    )
  }
}

export default SearchBar;