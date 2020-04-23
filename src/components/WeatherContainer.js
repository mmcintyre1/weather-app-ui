import React from 'react'
import SearchBar from './SearchBar'
import DayCard from './DayCard'
import { fetchWeather } from '../utils/weatherApi'
import apiKeys from '../apiKeys'


class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: null,
      dailyData: null,
      location: null
    }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather(zip) {
    if (zip) {
      fetchWeather(zip, apiKeys.openWeatherKey)
        .then(data => {
          console.log(data)
          this.setState({
            location: `${data.city.name}, ${data.city.country}`,
            fullData: data,
            dailyData: data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          })
        })
        .catch(() => {
          alert("Can't find that zip code.  Please try again.")
        })
    }
  }

  render() {
    return (
      <div>
        <SearchBar placeholder='ZIP codes...' submitFunc={this.getWeather} />
        <DayCard reading={this.state.dailyData} location={this.state.location} />
      </div>
    )
  }
}

export default WeatherContainer;