import React from 'react'


class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: this.props.reading
    }

  this.formatImgUrl = this.formatImgUrl.bind(this);
  }

  formatImgUrl() {
    console.log(this.weatherData)
  }

  render() {
    return (
      <div className="card">
        'hello'
      </div>
    )
  }
}

  /*console.log(reading)
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgUrl = `owf owf-${reading.weather[0].id} owf-5x`


  return (
    <div className="card">
      <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
      <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
      <i className={imgUrl}></i>
      <h2>{Math.round(reading.main.temp)} °F</h2>
      <div className="card-body">
        <p className="card-text">{reading.weather[0].description}</p>
      </div>
    </div>
  )
}
*/

export default DayCard