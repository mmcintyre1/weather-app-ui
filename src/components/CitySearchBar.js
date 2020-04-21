import React from 'react'
import citylist from './data/city-list.json'


class CitySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      value: '',
      searchedTerm: null,
      cityMatches: []
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.findMatches = this.findMatches.bind(this)
  }

  componentDidMount(){
    this.setState({
      cityData: citylist
    })
    console.log(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      cityMatches: this.findMatches(this.state.value, this.state.cityData)
    })
    console.log(this.state.cityMatches)
    event.preventDefault();
  }

  findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      console.log(place)
      const regex = new RegExp(wordToMatch, 'gi');
      return place.name.match(regex);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        {this.state.searchedTerm && <span>{this.state.searchedTerm}</span>}

        {this.state.cityMatches && <span>{this.state.cityMatches}</span>}

      </form>
    )
  }
}

export default CitySearchBar;