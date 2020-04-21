import React from 'react'
import citylist from './component/data/city-list.json'


class CitySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      value: ''
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
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
    console.log(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CitySearchBar;