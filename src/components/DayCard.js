import React from 'react'


class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: null,
      imgUrl: null
    }
    this.formatImgUrl = this.formatImgUrl.bind(this);
  }

  formatImgUrl(data) {
    this.setState({
      imgUrl: `owf owf-${data.weather[0].id} owf-5x`
    })
  }

  render() {
    const newDate = Date();
    if (this.props.reading) {
      const todaysData = this.props.reading[0]
      return (
        <div className="card">
          <h3 className="card-title">{newDate}</h3>
          <p className="text-muted">{newDate}</p>
          <i className={this.state.imgUrl}></i>
          <h2>{Math.round(todaysData.main.temp)} °F</h2>
          <div className="card-body">
            <p className="card-text">{todaysData.weather[0].description}</p>
          </div>
        </div>
      )
    }
    return <div>Hello</div>
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

    <h2>{Math.round(reading.main.temp)} °F</h2>
    <div className="card-body">
      <p className="card-text">{reading.weather[0].description}</p>
    </div>
  </div>
)
}
*/

export default DayCard