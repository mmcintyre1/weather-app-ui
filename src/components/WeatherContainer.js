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
      dailyData: null
    }
    this.getWeather = this.getWeather.bind(this)
  }

  componentDidMount() {
    this.getWeather('01845')
  }

  getWeather(zip) {
    fetchWeather(zip, apiKeys.openWeatherKey)
      .then(data => {
        this.setState({
          fullData: data,
          dailyData: data.filter(reading => reading.dt_txt.includes("18:00:00"))
        })
      })
  }

  render() {
    return (
      <div>
        <SearchBar placeholder='ZIP codes...' />
        <DayCard reading={this.state.dailyData} />
      </div>
    )
  }
}

export default WeatherContainer;